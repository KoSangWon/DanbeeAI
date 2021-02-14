import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";

const ClassItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );
};

export default ClassItem;

const styles = StyleSheet.create({
  container: {
    margin: d.px * 5,
    padding: d.px * 10,
    backgroundColor: c.mainColorLight
  },
  title: {
    fontSize: d.px * 20,
  },
});
