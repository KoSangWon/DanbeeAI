import {Schema, model} from 'mongoose';

const LikeSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        classInfo: {
            type: Schema.Types.ObjectId,
            ref : "classes",
        }
    },
    {timestamps: true}
);

const Like = model("likes", LikeSchema);

export default Like;