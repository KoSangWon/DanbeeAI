import * as React from "react";
import { View, Text, Spinner } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { c } from "../../utils/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";

const BoardItem = ({
  navigation,
  id,
  index,
  title,
  question,
  createdAt,
  disabled,
}) => {
  const date = new Date(createdAt);
  const parsedDate =
    date.getFullYear().toString().substring(2, 4) +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getDate();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ReviewBoard", {
          id,
          index,
          title,
          question,
          createdAt,
        });
      }}
      style={styles.container}
      disabled={disabled}
      activeOpacity={1}
    >
      <View style={styles.topContainer}>
        <View style={styles.indexContainer}>
          <Text style={{ fontSize: d.px * 15 }}>{index}</Text>
        </View>
        <Text style={styles.dateStyle}>{parsedDate}</Text>
      </View>
      <View style={{ marginTop: d.px * 15, width: d.width - 20 }}>
        <View style={{ marginBottom: d.px * 10 }}>
          <Text style={styles.titleStyle}>{"제목"}</Text>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
        <View style={{ marginBottom: d.px * 10 }}>
          <Text style={styles.titleStyle}>{"내용"}</Text>
          <Text style={styles.textStyle}>{question}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(BoardItem);

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
