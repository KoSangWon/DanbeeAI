import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";

const MyClassItem = ({ navigation, item, index }) => {
  console.log(item)
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ClassWebView", {uri: item.url})} style={styles.container}>
      <Text style={styles.title}>{item.class} ({item.professor})</Text>
      
    </TouchableOpacity>
  );
};

export default withNavigation(MyClassItem);

const styles = StyleSheet.create({
  container: {
    padding: d.px * 5,
    flexDirection:'row'
  },
  title: {
    fontSize: d.px * 13,
  },
});
