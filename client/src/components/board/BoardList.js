import * as React from "react";
import { View, Text, Spinner } from "native-base";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { d } from "../../utils/size";
import { gql, useQuery } from "@apollo/client";
import { c } from "../../utils/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";
import BoardItem from "./BoardItem";

export const GET_BOARDS_QUERY = gql`
  query GetBoards {
    allBoards {
      id
      title
      question
      answer
      createdAt
    }
  }
`;

const BoardList = ({ navigation }) => {
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 280 }}
    >
      <View style={styles.productContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...styles.subText,
              fontSize: d.px * 18,
              paddingTop: d.px * 20,
            }}
          >
            등록을 원하는 질문과 답변을 남겨주세요!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: d.px * 3,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterBoard")}
          style={styles.registerBtn}
        >
          <Text style={{ color: c.mainColor }}>{"게시글 등록 >"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ListContainer}>
        {data.allBoards.map((review, index) => {
          return (
            <BoardItem
              key={review.id}
              index={index + 1}
              id={review.id}
              title={review.title}
              question={review.question}
              answer={review.answer}
              createdAt={review.createdAt}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default withNavigation(BoardList);

const styles = StyleSheet.create({
  registerBtn: {
    backgroundColor: c.mainBlack,
    padding: d.px * 10,
    marginTop: d.px * 5,
    borderRadius: d.px * 15,
  },
  productContainer: {
    paddingBottom: d.px * 20,
    backgroundColor: c.mainColorLight,
    borderRadius: d.px * 10,
  },
  subText: {
    fontSize: d.px * 18,
    fontWeight: "500",
  },
  ListContainer: {
    marginTop: d.px * 2,
  },
});
