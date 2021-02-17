import { Schema, model } from "mongoose";

const infoSchema = Schema({ 
    title : String,
});

const Info = model("infos", infoSchema);
export default Info;