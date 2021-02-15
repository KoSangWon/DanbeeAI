import * as React from "react";
import { useState } from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import { c } from "../../utils/color";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { gql, useMutation } from "@apollo/client";
import SubHeader from "../../components/headers/SubHeader";
import { LeftText } from "../../components/text/LeftText";
import { GET_BOARDS_QUERY } from "../../components/board/BoardList";

const REGISTER_BOARD_MUTATION = gql`
  mutation RegisterBoard($title: String!, $question: String!, $answer: String!) {
    registerBoard(title: $title, question: $question, answer: $answer)
  }
`;

const RegisterBoard = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [RegBoard] = useMutation(REGISTER_BOARD_MUTATION);

  const onSubmit = async () => {
    try {
      await RegBoard({
        variables: { title, question, answer },
        refetchQueries: () => [{ query: GET_BOARDS_QUERY }],
      });
      alert("게시글이 등록되었습니다.");
      navigation.navigate("BoardMain");
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <View>
      <SubHeader title="게시글 등록" />
      <ScrollView>
        <View style={styles.paperContainer}>
          <View style={{ marginBottom: d.px * 2 }}>
            <LeftText text={"강좌"} />
          </View>
          <TextInput
            multiline
            style={{ ...styles.textInput, height: d.px * 50 }}
            onChangeText={(content) => setTitle(content)}
            value={title}
          />
        </View>
        <View style={styles.paperContainer}>
          <View style={{ marginBottom: d.px * 2 }}>
            <LeftText text={"질문"} />
          </View>
          <TextInput
            multiline
            style={styles.textInput}
            onChangeText={(content) => setQuestion(content)}
            value={question}
          />
        </View>
        <View style={styles.paperContainer}>
          <View style={{ marginBottom: d.px * 2 }}>
            <LeftText text={"답변"} />
          </View>
          <TextInput
            multiline
            style={styles.textInput}
            onChangeText={(content) => setAnswer(content)}
            value={answer}
          />
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.regBtn}>
          <Text style={styles.regText}>등록버튼</Text>
        </TouchableOpacity>
        {/* <View style={{ marginLeft: d.px * 30, marginTop: d.px * 80 }}>
        <Text style={{ fontWeight: "600" }}>
          사진도 첨부 가능하도록 할 예정
        </Text>
      </View> */}
      </ScrollView>
    </View>
  );
};

export default RegisterBoard;

const styles = StyleSheet.create({
  paperContainer: {
    marginLeft: d.px * 30,
    marginRight: d.px * 30,
    marginBottom: d.px*5,
    marginTop: d.px*5,
  },
  textInput: {
    height: d.px * 100,
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
