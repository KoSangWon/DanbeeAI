import * as React from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { c } from "../../utils/color";

const BoardReviewItem = ({ username, index, text, createdAt }) => {

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
        <View style={styles.indexContainer}>
          <Text style={{ fontSize: d.px * 10 }}>{index}</Text>
        </View>
        <Text style={styles.dateStyle}>{parsedDate}</Text>
      </View>
      <View style={{ marginTop: d.px * 15 }}>
        <View style={{ marginBottom: d.px * 10, flexDirection:'row' }}>
          <Text style={styles.titleStyle}>{"ID"}</Text>
          <Text style={styles.textStyle}>{username}</Text>
        </View>
        <View style={{ marginBottom: d.px * 10,  flexDirection:'row' }}>
          <Text style={styles.titleStyle}>{"내용"}</Text>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default BoardReviewItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: d.px * 10,
    paddingBottom: d.px * 10,
    borderBottomColor: c.darkGrayColor,
    borderBottomWidth: d.px * 0.5,
    paddingLeft: d.px * 10,
    paddingRight: d.px * 10,
  },
  indexContainer: {
    backgroundColor: c.mainColorLight,
    width: d.px * 20,
    height: d.px * 20,
    borderRadius: d.px * 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: d.px * 15,
    width: d.px*50,
    color: c.redColor,
    fontWeight: "600",
    padding: d.px * 3,
  },
  textStyle: {
    fontSize: d.px * 15,
    color: c.mainBlack,
    fontWeight: "600",
    padding: d.px * 3,
  },
  dateStyle: {
    fontSize: d.px * 14,
  },
});
