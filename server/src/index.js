import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import consola from "consola";

import { IN_PROD, DB, APP_PORT } from './config';
import { uploadMiddleware, uploadController } from "../upload";
import path from 'path';
import fs from 'fs';


//Initialize the App
const app = express();


// Setting up the middlewares
app.disable("x-powered-by")

// Starting Apollo-Express-Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => req,
    playground: {
        endpoint: `http://192.168.35.92:4000/graphql`,
        settings: {
        },
    }
});


// Start Application Function
const startApp = async() => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        consola.success({
            message: `Successfully connected with the database \n${DB}`,
            badge: true,
        });

        server.applyMiddleware({app, cors: false})
        app.post("/api/upload", uploadMiddleware, uploadController);
        app.get("/user/image/:filename", (req, res) => {
            fs.readFile(
                path.join(__dirname, `../uploads/` + req.params.filename),
                (e, data) => {
                    if(e){
                        console.log(e);
                        res.end();
                    }else{
                        res.writeHead(200, {
                            'Content-Type':'image/png',
                            'Content-Length':data.length
                        })
                        res.end(data)
                    }
                }
            )
        })

        app.listen({port:APP_PORT}, ()=>{
            consola.success({
                message: `Apollo Server start on \nhttp://192.168.35.92:${APP_PORT}${server.graphqlPath}`,
                badge: true,
            });
        })
    } catch(err){
        consola.error({
            message: `Unable to start the server \n${err.message}`
        })
    }
};

startApp();