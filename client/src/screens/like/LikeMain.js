import * as React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  View,
  Icon,
  Text,
  Button,
  CheckBox,
  Item,
} from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { TouchableOpacity } from "react-native-gesture-handler";
import { c } from "../../utils/color";
import { useMutation, gql } from "@apollo/client";
import MainHeader from "../../components/headers/MainHeader";
import NavBar from "../../navigations/NavBar";
import ClassList from "../../components/like/ClassList";

const DELETE_CHECK_LIKES = gql`
  mutation DelCheckLikes($productIdArray: [String!]) {
    deleteCheckLikes(productIdArray: $productIdArray)
  }
`;

const LikeMain = ({ navigation }) => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const [DelCheckLikes] = useMutation(DELETE_CHECK_LIKES);

  const dispatch = useDispatch();

  return (
    <Container>
      <NavBar selectedStack={"LikeStack"}>
        <MainHeader title="전체강좌" />
        <View style={{ marginTop: d.px * 8 }}>
          <ClassList items={['aa','bb','cc','dd']}/>
        </View>
      </NavBar>
    </Container>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  completeContainer: {
    backgroundColor: c.mainColor,
    width: d.px * 40,
    height: d.px * 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: d.px * 12.5,
    marginRight: d.px * 10,
  },
  completeText: {
    fontSize: d.px * 13,
    color: "#ffffff",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: d.px * 300,
  },
  loginText: {
    margin: d.px * 10,
    fontSize: d.px * 20,
    fontWeight: "600",
  },
});
export default LikeMain;
