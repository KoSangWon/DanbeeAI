import { GraphQLScalarType, Kind } from "graphql";
import { getAuthUser } from "../../functions/auth";
import { Board, BoardReview } from "../../models";

export default {
  Query: {
    allBoards: async () => {
      const boards = await Board.find().sort({ createdAt: -1 });
      return boards;
    },
    myBoards: async (_, __, context) => {
      const { _id } = await getAuthUser(context, true);
      try {
        const boards = await Board.find({
          writer: _id,
        });
        return boards;
      } catch (err) {
        console.log(err);
      }
    },
    reviewCnt: async (_, { boardId }) => {
      try {
        const reviews = await BoardReview.find({ boardId });
        console.log(reviews.length)
        return reviews.length;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    registerBoard: async (_, args, context) => {
      const { _id } = await getAuthUser(context, true);
      const { title, question, answer } = args;

      try {
        await Board.create({
          writer: _id,
          title,
          question,
          answer,
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteBoard: async (_, args) => {
      const { boardId } = args;

      try {
        await Board.deleteOne({ _id: boardId });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};
