import { SubInfo } from "../../models";

export default {
  Query: {
    subInfos: async () => {
      return await SubInfo.find({});
    },
  },
};
