import ClassInfo from "../../models/ClassInfo";

export default {
  Query: {
    classes: async () => {
      const classes = await ClassInfo.find({});
      return classes;
    },
  },
};
