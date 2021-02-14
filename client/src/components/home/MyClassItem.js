import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";

const MyClassItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );
};

export default MyClassItem;

const styles = StyleSheet.create({
  container: {
    padding: d.px * 5,
  },
  title: {
    fontSize: d.px * 13,
  },
});
