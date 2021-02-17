import { Info } from "../../models";

export default {
  Query: {
    infos: async () => {
      return await Info.find({});
    },
  },
};
