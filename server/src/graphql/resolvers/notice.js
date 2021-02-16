import { Notice } from "../../models";

export default {
  Query: {
    //Notice Resolver
    notices: async () => {
      const notices = await Notice.find({});
      return notices;
    },
  },
};
