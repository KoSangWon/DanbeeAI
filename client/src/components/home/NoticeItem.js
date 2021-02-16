import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { c } from "../../utils/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";

const NoticeItem = ({ navigation, item, index }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("NoticeMain", {
          title: item.title,
          content: item.content,
        })
      }
      style={index === 0 ? styles.firstContainer : styles.container}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(NoticeItem);

const styles = StyleSheet.create({
  container: {
    padding: d.px * 5,
    borderBottomWidth: d.px * 1,
    borderBottomColor: c.mainColorDark,
  },
  firstContainer: {
    padding: d.px * 5,
    borderBottomColor: c.mainColorDark,
    borderBottomWidth: d.px * 1,
    borderTopWidth: d.px * 1,
    borderTopColor: c.mainColorDark,
  },
  title: {
    fontSize: d.px * 13,
  },
});
