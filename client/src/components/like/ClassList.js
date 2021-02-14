import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import ClassItem from "./ClassItem";

const ClassList = ({ items }) => {
  return (
    <View style={styles.container}>
        {items.map((item, index) => (
          <ClassItem key={index} item={item} />
        ))}
    </View>
  );
};

export default ClassList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: d.px * 15,
    paddingRight: d.px * 15,
    paddingTop: d.px * 7,
  },
  title: {
    fontSize: d.px * 14,
  },
});
