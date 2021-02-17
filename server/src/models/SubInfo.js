import { Schema, model } from "mongoose";

const subInfoSchema = Schema({ 
    title : String,
});

const SubInfo = model("subinfos", subInfoSchema);
export default SubInfo;