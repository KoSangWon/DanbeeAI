import { Schema, model } from "mongoose";
// schema
const boardSchema = Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    title: String,
    question: String,
    answer: String
  },
  { timestamps: true }
);

const Board = model("boards", boardSchema);
export default Board;
