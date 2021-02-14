import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import MyClassItem from "./MyClassItem";

const MyClassList = ({ items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {items.map((item, index) => (
          <MyClassItem key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default MyClassList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: d.px * 15,
    paddingRight: d.px * 15,
    paddingTop: d.px * 7,
  },
  subcontainer: {
    padding: d.px * 5,
    borderColor: c.mainColorDark,
    borderLeftWidth: d.px * 4,
    borderBottomRightRadius: d.px * 3,
    borderTopRightRadius: d.px * 3,
  },
  title: {
    fontSize: d.px * 14,
  },
});
