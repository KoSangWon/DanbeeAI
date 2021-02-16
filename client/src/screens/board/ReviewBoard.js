import { gql, useMutation, useQuery } from '@apollo/client';
import { Container, Spinner, Text, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BoardReview from '../../components/board/BoardReview';
import BoardReviewItem from '../../components/board/BoardReviewItem';
import SubHeader from '../../components/headers/SubHeader';
import { c } from '../../utils/color';
import { d } from '../../utils/size';

const GET_BOARD_REVIEWS_QUERY = gql`
  query GetBoardReviews($boardId: String!) {
    allBoardReviews(boardId: $boardId) {
      id
      writer {
        username
      }
      text
      createdAt
    }
  }
`;


const REGISTER_BOARD_REVIEW_MUTATION = gql`
  mutation RegisterBoardReview($boardId: String!, $text: String!) {
    registerBoardReview(boardId: $boardId, text: $text)
  }
`;

const ReviewBoard = ({ route }) => {
  const { id, title, question, createdAt, index } = route.params;
  const [text, setText] = useState("");
  const [RegBoardReview] = useMutation(REGISTER_BOARD_REVIEW_MUTATION);

  const onSubmit = async () => {
    try {
      await RegBoardReview({
        variables: { boardId: id, text },
        refetchQueries: () => [
          {
            query: GET_BOARD_REVIEWS_QUERY,
            variables: {
              boardId: id,
            },
          },
        ],
      });
      setText("");
      alert("답글이 등록되었습니다.");
    } catch (err) {
      console.log("에러", err);
    }
  };

  const { loading, error, data } = useQuery(GET_BOARD_REVIEWS_QUERY, {variables: {boardId: id}});

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
    <Container>
      <SubHeader title={"답글"} />
      <ScrollView>
        <BoardReview
          title={title}
          question={question}
          createdAt={createdAt}
          index={index}
          disabled={true}
        />
        <View
          style={{
            padding: d.px * 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ padding: d.px * 5 }}>
            <Text style={{ fontSize: d.px * 14, padding: d.px * 4 }}>
              {"답글"}
            </Text>
          </View>
          <TextInput
            style={{ ...styles.textInput, flex: 1 }}
            onChangeText={(content) => setText(content)}
            value={text}
          />
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              marginLeft: d.px * 10,
              marginRight: d.px * 10,
              justifyContent: "center",
              backgroundColor: c.mainColorDark,
              padding: d.px * 10,
              borderRadius: d.px * 20,
            }}
          >
            <Text style={{ fontSize: d.px * 14 }}>등록</Text>
          </TouchableOpacity>
        </View>
        <View>
          {data.allBoardReviews.length == 0?(<View style={{paddingLeft: d.px* 20, paddingTop: d.px*10}}>
            <Text style={{fontSize: d.px*15, color:'red'}}>아직 답글이 없습니다.</Text>
          </View>):(data.allBoardReviews.map((item, index) => (
            <BoardReviewItem
              key={item.id}
              id={item.id}
              username={item.writer.username}
              index={index + 1}
              text={item.text}
              createdAt={item.createdAt}
            />
          )))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default ReviewBoard;


const styles = StyleSheet.create({
    textInput: {
      height: d.px * 30,
      borderWidth: d.px * 1,
      borderColor: "lightgray",
    },
    regBtn: {
      marginTop: d.px * 14,
      alignItems: "center",
      borderRadius: d.px * 50,
      backgroundColor: c.mainColorDark,
      width: d.px * 100,
      alignSelf: "center",
      marginBottom: d.px*300,
    },
    regText: {
      fontSize: d.px * 15,
      padding: d.px * 13,
      fontWeight: "600",
    },
  });
  