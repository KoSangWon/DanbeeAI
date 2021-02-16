import { Like } from "../../models";
import { getAuthUser } from "../../functions/auth";

export default {
  Query: {
    likes: async (_, __, context) => {
      const { _id } = await getAuthUser(context, true);

      const classInfo = await Like.find({ owner: _id })
        .populate([
          { path: "classInfo" },
        ])
      return classInfo;
    },
    isLiked: async (_, args, context) => {
      if (context.headers.authorization) {
        const { _id } = await getAuthUser(context, true);
        if (_id) {
          const { classId } = args;
          const existingLike = await Like.find({
            classInfo: classId,
            owner: _id,
          });
          if (existingLike.length) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    },
  },
  Mutation: {
    registerLike: async (_, args, context) => {
      const { _id } = await getAuthUser(context, true);
      const { classId } = args;
      try {
        const existingLike = await Like.find({
          classInfo: classId,
          owner: _id,
        });
        if (existingLike.length) {
          return true;
        } else {
          await Like.create({ classInfo: classId, owner: _id });
          return true;
        }
      } catch (error) {
        console.log("error", error);
        return false;
      }
    },

    deleteLike: async (_, args, context) => {
      const { _id } = await getAuthUser(context, true);
      const { classId } = args;
      try {
        await Like.deleteOne({
          owner: _id,
          classInfo: classId,
        });
        return true;
      } catch (error) {
        console.log("error:", error);
        return false;
      }
    },
  },
};
