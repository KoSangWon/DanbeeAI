 import { Schema, model } from "mongoose";
// schema
const noticeSchema = Schema({ 
    type : String, // 공지 or 일반글
    title : String,
    content : String,
    writeDate:{type:Date, default:Date.now},
    comment : [{
        writer : {
        type: Schema.Types.ObjectId,
        ref : "users",
        },

        content : String
        }]
});

const Notice = model("notices", noticeSchema);
export default Notice;