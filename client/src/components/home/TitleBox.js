import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";

const TitleBox = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default TitleBox;

const styles = StyleSheet.create({
  container: {
    paddingLeft: d.px*15,
    paddingTop: d.px*7,
    flexDirection: 'row'
  },
  subcontainer: {
    padding: d.px*10,
    backgroundColor: c.mainColor,
    borderColor: c.mainColorDark,
    borderLeftWidth: d.px*4,
    borderBottomRightRadius: d.px*3,
    borderTopRightRadius: d.px*3,
  },
  title: {
      fontSize: d.px*14,
  }
});
