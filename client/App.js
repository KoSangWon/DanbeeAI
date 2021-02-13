import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { setContext } from "@apollo/client/link/context";
// import { AsyncAccessToken } from "./utils/asyncStorage";
// import NavController from "./navigation/NavController";
import { Text } from "native-base";
import NavController from "./src/navigations/NavController";
import store from "./src/store/store";

const LOCAL_API_URL = "http://172.30.1.37:4000";
//const API_URL = "http://172.30.1.5:4000"; //http://gitlab.kfirstlab.com:4000

const httpLink = createHttpLink({ uri: `${LOCAL_API_URL}/graphql` }); //API_URL로 써도됨

const userJWT = async () => {
  const token = await AsyncStorage.getItem(AsyncAccessToken);
  // console.log('userjwt',token);
  return token ? token : "";
};

const authLink = setContext(async (_, { headers }) => {
  const token = await userJWT();

  parsed_token = token.replace(/"/g, "");

  return {
    headers: {
      ...headers,
      authorization: parsed_token,
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        likes: {
          merge(_ignored, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const App = () => {
  // const [loaded] = useFonts({
  //   Roboto: require("native-base/Fonts/Roboto.ttf"),
  //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <NavController />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
