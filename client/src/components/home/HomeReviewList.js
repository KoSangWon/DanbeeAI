import React from "react";
import { Spinner, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import { useQuery } from "@apollo/client";
import { GET_BOARDS_QUERY } from "../board/BoardList";
import HomeReviewItem from "./HomeReviewItem";

const HomeReviewList = () => {
  const { loading, error, data } = useQuery(GET_BOARDS_QUERY);
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
      <View style={styles.subcontainer}>
        {data.allBoards.map((item, index) => (
          <HomeReviewItem key={index} item={item} index={index} />
        ))}
      </View>
    </View>
  );
};

export default HomeReviewList;

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
