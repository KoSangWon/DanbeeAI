import * as React from "react";
import { Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "@react-navigation/compat";
import { d } from "../../utils/size";
import { c } from "../../utils/color";

const MyBox = ({ title, navigation, stack, screen, params }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(stack, { screen: screen });
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(MyBox);

const styles = StyleSheet.create({
  container: {
    height: d.px * 45,
    width: d.width / 3.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: d.px * 1,
    borderColor: c.mainColor,
    backgroundColor: c.mainColor,
    borderRadius: d.px * 25,
    margin: d.px * 5,
  },
  title: {
    fontSize: d.px * 15,
    fontWeight: "500",
    color: c.mainBlack,
  },
});
