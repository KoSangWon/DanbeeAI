import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { c } from "../../utils/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";

const HomeReviewItem = ({ navigation, item, index }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ReviewBoard", {
          id: item.id,
          index,
          title: item.title,
          question: item.question,
          createdAt: item.createdAt,
        });
      }}
      activeOpacity={1}
      style={index === 0 ? styles.firstContainer : styles.container}
    >
      <Text style={styles.title}>- {item.title}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(HomeReviewItem);

const styles = StyleSheet.create({
  container: {
    padding: d.px * 5,
    // borderBottomWidth: d.px * 1,
    borderBottomColor: c.mainColorDark,
  },
  firstContainer: {
    padding: d.px * 5,
    borderBottomColor: c.mainColorDark,
    // borderBottomWidth: d.px * 1,
    // borderTopWidth: d.px * 1,
    borderTopColor: c.mainColorDark,
  },
  title: {
    fontSize: d.px * 13,
  },
});
