import { Schema, model } from "mongoose";
// schema
const boardReviewSchema = Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    boardId: String,
    text: String,
  },
  { timestamps: true }
);

const BoardReview = model("boardReviews", boardReviewSchema);
export default BoardReview;
