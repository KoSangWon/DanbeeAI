import * as React from "react";
import { useState } from "react";
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
  Row,
  Image,
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { d } from "../../utils/size";
import { withNavigation } from "@react-navigation/compat";
import { c } from "../../utils/color";
import { AntDesign } from "@expo/vector-icons";

const BoardItem = ({
  index,
  writer,
  text,
  createdAt,
}) => {
  const date = new Date(createdAt);
  const parsedDate =
    date.getFullYear().toString().substring(2, 4) +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getDate();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View
          style={styles.indexContainer}
        >
          <Text style={{fontSize: d.px*15}}>{index}</Text>
        </View>
        <Text style={styles.dateStyle}>{parsedDate}</Text>
      </View>
      <View style={{marginTop: d.px*15}}>
        <Text style={styles.textStyle}>{"강좌 : " + text}</Text>
        <Text style={styles.textStyle}>{"질문 : " + text}</Text>
        <Text style={styles.textStyle}>{"답변 : " + text}</Text>
      </View>
    </View>
  );
};

export default BoardItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: d.px * 20,
    paddingBottom: d.px * 20,
    borderBottomColor: c.mainBlack,
    borderBottomWidth: d.px * 1,
    paddingLeft: d.px * 10,
    paddingRight: d.px * 10,
  },
  indexContainer: {
    backgroundColor: c.mainColorDark,
    width: d.px * 24,
    height: d.px * 24,
    borderRadius: d.px * 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    backgroundColor: c.mainColorDark,
    borderRadius: d.px * 20,
  },
  textStyle: {
    fontSize: d.px * 17,
    color: c.mainBlack,
    fontWeight: "600",
    padding: d.px * 8,
  },
  dateStyle: {
    fontSize: d.px * 14,
  },
});
