import { getAuthUser } from "../../functions/auth";
import BoardReview from "../../models/BoardReview";

export default {
  Query: {
    allBoardReviews: async (_, { boardId }) => {
      const boardReviews = await BoardReview.find({ boardId })
        .sort({
          createdAt: -1,
        })
        .populate("writer");
      return boardReviews;
    },
    myBoardReviews: async (_, { boardId }, context) => {
      const { _id } = await getAuthUser(context, true);
      try {
        const boardReviews = await BoardReview.find({
          writer: _id,
          boardId,
        });
        return boardReviews;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    registerBoardReview: async (_, args, context) => {
      const { _id } = await getAuthUser(context, true);
      const { boardId, text } = args;

      try {
        await BoardReview.create({
          writer: _id,
          boardId,
          text,
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteBoard: async (_, args) => {
      const { boardReviewId } = args;

      try {
        await BoardReview.deleteOne({ _id: boardReviewId });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
