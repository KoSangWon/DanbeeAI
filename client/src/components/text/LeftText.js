import * as React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";

export const LeftText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: d.px * 10,
    marginBottom: d.px * 10,
  },
  textStyle: {
    fontWeight: "600",
    fontSize: d.px * 20,
  },
});
