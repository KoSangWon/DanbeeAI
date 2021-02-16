import { Schema, model } from "mongoose";

const classInfoSchema = Schema({ 
    professor : String,
    class : String,
    url: String,
});

const ClassInfo = model("classes", classInfoSchema);
export default ClassInfo;