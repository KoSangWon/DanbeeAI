import * as React from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { c } from "../../utils/color";

const BoardItem = ({ index, title, question, answer, createdAt }) => {
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
          <Text style={{ fontSize: d.px * 15 }}>{index}</Text>
        </View>
        <Text style={styles.dateStyle}>{parsedDate}</Text>
      </View>
      <View style={{ marginTop: d.px * 15 }}>
        <View style={{ marginBottom: d.px * 10 }}>
          <Text style={styles.titleStyle}>{"강좌"}</Text>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
        <View style={{ marginBottom: d.px * 10 }}>
          <Text style={styles.titleStyle}>{"질문"}</Text>
          <Text style={styles.textStyle}>{question}</Text>
        </View>
        <View style={{ marginBottom: d.px * 10 }}>
          <Text style={styles.titleStyle}>{"답변"}</Text>
          <Text style={styles.textStyle}>{answer}</Text>
        </View>
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
  titleStyle: {
    fontSize: d.px * 17,
    color: c.blueColor,
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
