import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Container, View, Icon, Text, Spinner } from "native-base";
import { d } from "../../utils/size";
import { c } from "../../utils/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwitchToggle from "react-native-switch-toggle";
import AsyncStorage from "@react-native-community/async-storage";
import { AsyncAccessToken } from "../../utils/asyncStorage";
import { useSelector, useDispatch } from "react-redux";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import SubHeader from "../../components/headers/SubHeader";

const USER_PROFILE_QUERY = gql`
  query {
    profile {
      id
    }
  }
`;

const LEAVE_MUTATION = gql`
  mutation Leave($id: String!) {
    leave(id: $id)
  }
`;

const SettingMain = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  // console.log("Setting화면에서 isloggedin:", isLoggedIn);

  const setIsLoggedIn = (isLoggedIn) => {
    dispatch({ type: "SET_IS_LOGGEDIN", isLoggedIn });
  };

  const [pushChecked, setPushChecked] = useState(true);

  const [Leave] = useMutation(LEAVE_MUTATION);

  const [runFunc, { loading, error, data }] = useLazyQuery(USER_PROFILE_QUERY);
  console.log('islogge', isLoggedIn)
  useEffect(() => {
    if (isLoggedIn) {
      runFunc();
    }
  }, [isLoggedIn]);

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

  const logout = async () => {
    await AsyncStorage.removeItem(AsyncAccessToken);
    console.log(await AsyncStorage.getItem(AsyncAccessToken));
    setIsLoggedIn(false);
    navigation.navigate("MyStack", { screen: "MyMain" });
    alert("로그아웃되었습니다.");
  };

  const leave = async () => {
    try {
      await AsyncStorage.removeItem(AsyncAccessToken);
      const a = await Leave({ variables: { id: data.profile.id } });
      console.log("a", a);
      setIsLoggedIn(false);
      alert("탈퇴되었습니다.");
      navigation.navigate("HomeStack", { screen: "HomeMain" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SubHeader title="설정" />
      <View styles={{ margin: d.px * 18 }}>
        <View style={styles.listStyle}>
          <Text style={styles.textStyle}>푸시알림 받기</Text>
          <SwitchToggle
            switchOn={pushChecked}
            onPress={() => setPushChecked(!pushChecked)}
            circleColorOn={c.mainColor}
          />
        </View>
        {isLoggedIn ? (
          <>
            <TouchableOpacity onPress={logout} style={styles.listStyle}>
              <Text style={styles.textStyle}>로그아웃</Text>
              <Icon name="arrow-forward" />
            </TouchableOpacity>
            <TouchableOpacity onPress={leave} style={styles.listStyle}>
              <Text style={styles.textStyle}>탈퇴하기</Text>
              <Icon name="arrow-forward" />
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </Container>
  );
};

export default SettingMain;

const styles = StyleSheet.create({
  listStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: d.px * 18,
    marginRight: d.px * 18,
    borderBottomWidth: d.px * 1,
    borderBottomColor: "lightgray",
    padding: d.px * 8,
    alignItems: "center",
  },
  textStyle: {
    fontSize: d.px * 16.5,
    paddingLeft: d.px * 10,
  },
});
