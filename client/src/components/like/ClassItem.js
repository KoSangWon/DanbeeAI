import React, { useEffect, useState } from "react";
import { Spinner, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";
import { GET_LIKE_QUERY } from "../home/MyClassList";

const IS_LIKED_QUERY = gql`
  query IsLiked($classId: String!) {
    isLiked(classId: $classId)
  }
`;

const REGISTER_LIKE_MUTATION = gql`
  mutation RegLike($classId: String!) {
    registerLike(classId: $classId)
  }
`;

const DELETE_LIKE_MUTATION = gql`
  mutation DelLike($classId: String!) {
    deleteLike(classId: $classId)
  }
`;

const ClassItem = ({ navigation, item }) => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const [isLiked, setIsLiked] = useState(false);

  const [RegLike] = useMutation(REGISTER_LIKE_MUTATION);
  const [DelLike] = useMutation(DELETE_LIKE_MUTATION);
  const pressHeart = async () => {
    if (!isLiked) {
      try {
        await RegLike({
          variables: { classId: item.id },
          refetchQueries: () => [{ query: GET_LIKE_QUERY }],
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await DelLike({
          variables: { classId: item.id },
          refetchQueries: () => [{ query: GET_LIKE_QUERY }],
        });
      } catch (err) {
        console.log(err);
      }
    }

    await setIsLiked(!isLiked);
  };

  const [runFunc, { loading, error, data }] = useLazyQuery(IS_LIKED_QUERY, {
    //DB에 이미 있는지 체크
    variables: { classId: item.id },
  });

  useEffect(() => {
    if (isLoggedIn) {
      runFunc();
      if (data) {
        setIsLiked(data.isLiked);
      }
    }
  }, [data, isLoggedIn]);

  if (loading)
    return (
      <View styles={{ justifyContent: "center", alignItems: "center" }}>
        <Spinner />
      </View>
    );
  if (error) {
    console.log(error);
    return (
      <View>
        <Text>가져오지 못했습니다.</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ClassWebView", { uri: item.url })}
      style={styles.container}
    >
      <Text style={{...styles.title, color: c.blueColor, fontWeight: '600'}}>{item.professor}</Text>
      <Text style={{ ...styles.title, flex: 2 }}>{item.class}</Text>
      <TouchableOpacity onPress={pressHeart}>
        <MaterialCommunityIcons
          name={isLiked ? "heart" : "heart-outline"}
          style={isLiked ? styles.selectedIcon : styles.icon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default withNavigation(ClassItem);

const styles = StyleSheet.create({
  container: {
    margin: d.px * 5,
    padding: d.px * 10,
    backgroundColor: c.mainColorLight,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: d.px * 15,
    flex: 1,
  },
  icon: {
    alignItems: "center",
    fontSize: 30,
    color: c.redColor,
    zIndex: 2,
  },
  selectedIcon: {
    alignItems: "center",
    fontSize: 30,
    color: c.redColor,
    zIndex: 2,
  },
});
