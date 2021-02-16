import { User } from "../../models";
import { registerValidate, loginValidate } from "../validators";
import bcrypt from "bcryptjs";
import {
  issueTokens,
  getAuthUser,
  getRefreshTokenUser,
} from "../../functions/auth";
import Joi from "@hapi/joi";
import { doTypesOverlap } from "graphql";

export default {
  Query: {
    //Return the User List
    users: async () => {
      let users = await User.find();
      return users;
    },
    //Protected Resolver
    profile: async (_, __, context) => {
      let authUser = await getAuthUser(context, true);
      return authUser;
    },
    refreshToken: async (_, __, context) => {
      let authUser = await getRefreshTokenUser(context, true);
      let tokens = await issueTokens(authUser);
      return {
        user: authUser,
        ...tokens,
      };
    },
  },
  Mutation: {
    //login Resolver
    login: async (_, args) => {
      //            await loginValidate.validate(args, {abortEarly: true});
      await Joi.assert(args, loginValidate, { abortEarly: false });

      //Check if the user is in the database with the username or not
      let user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("Username not found");
      }
      //Compare password
      let isMatch = await bcrypt.compare(args.password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password.");
      }

      //Issue the token and refresh token
      let tokens = await issueTokens(user);

      return {
        user,
        ...tokens,
      };
    },
    //Register Resolver
    register: async (_, args) => {
      console.log("Mutation호출됨");
      //validate the User Data
      await Joi.assert(args, registerValidate, { abortEarly: false });
      //Check of the user is alerady in the Database with the same username
      let user = await User.findOne({ username: args.username });
      if (user) {
        throw new Error("Username is already taken");
      }
      user = await User.findOne({ email: args.email });
      if (user) {
        throw new Error("Email is already registered");
      }
      args.password = await bcrypt.hash(args.password, 10);
      let newUser = await User.create(args);

      // issue the token and refresh token
      let tokens = await issueTokens(newUser);

      return {
        user: newUser,
        ...tokens,
      };
    },
    updateInfo: async (_, args, context) => {
      const { _id } = await getAuthUser(context, true);
      const { username } = args;
      try {
        await User.updateOne({ _id }, { $set: { username } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    leave: async (_, args) => {
      const { id } = args;
      try {
        await User.deleteOne({ _id: id });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
