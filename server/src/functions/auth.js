import jwt from 'jsonwebtoken';
import { APP_REFRESH_SECRET, APP_SECRET } from '../config';
import { User } from '../models';
import { AuthenticationError } from 'apollo-server-express';

export const issueTokens = async ({username, email}) => {
    let token = await jwt.sign({username, email}, APP_SECRET, {
        // expiresIn: "2d",
    });

    let refreshToken = await jwt.sign({username, email}, APP_REFRESH_SECRET, {
        // expiresIn: "2d",
    });
    console.log("issueToken발급ㅎ")
    return {
        token,
        refreshToken,
    };
};



export const getAuthUser = async (request, requiresAuth = false) => {
    const header = request.headers.authorization;
    if(header){
        const token = jwt.verify(header, APP_SECRET);
        //console.log("TOKEN_DECODED", token);
        let authUser = await User.findOne({email:token.email});
        if(!authUser){
            console.log("getAuthUser 인증에러다")
            throw new AuthenticationError(
                "Invalid token, User Authentication failed."
            );
        }
        if(requiresAuth){
            return authUser;
        }
        return null;
    }
}


export const getRefreshTokenUser = async(request) => {
    const header = request.headers.refresh_token;
    if(header){
        const token = jwt.verify(header, APP_REFRESH_SECRET);
        // console.log("TOKEN_DECODED", token);
        let authUser = await User.findOne({email:token.email});
        if(!authUser){
            throw new AuthenticationError(
                "Invalid refrest token, User Authentication failed."
            );
        }
        return authUser;
    }
}