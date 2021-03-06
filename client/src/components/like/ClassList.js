import React from "react";
import { Spinner, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import ClassItem from "./ClassItem";
import { gql, useQuery } from "@apollo/client";


const CLASS_QUERY = gql`
  query {
    classes {
      id
      professor
      class
      url
    }
  }
`;


const ClassList = ({ items }) => {

  const { loading, error, data } = useQuery(CLASS_QUERY);
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

    return (
    <View style={styles.container}>
        {data.classes.map((item, index) => (
          <ClassItem key={index} item={item} />
        ))}
    </View>
  );
};

export default ClassList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: d.px * 15,
    paddingRight: d.px * 15,
    paddingTop: d.px * 7,
  },
  title: {
    fontSize: d.px * 14,
  },
});
