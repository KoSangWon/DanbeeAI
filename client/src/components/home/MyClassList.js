import React from "react";
import { Spinner, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import MyClassItem from "./MyClassItem";
import { gql, useQuery } from "@apollo/client";

export const GET_LIKE_QUERY = gql`
  query {
    likes {
      classInfo {
        professor
        class
        url
      }
    }
  }
`;

const MyClassList = () => {
  const { loading, error, data } = useQuery(GET_LIKE_QUERY);
  if (loading)
    return (
      <View
        styles={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <Spinner />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>ID를 가져오지 못했습니다.</Text>
      </View>
    );
    console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {data.likes.map((item, index) => (
          <MyClassItem key={index} index={index} item={item.classInfo} />
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
