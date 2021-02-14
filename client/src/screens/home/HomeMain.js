import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import NavBar from "../../navigations/NavBar";
import HomeHeader from "../../components/headers/HomeHeader";
import TitleBox from "../../components/home/TitleBox";
import MyClassList from "../../components/home/MyClassList";

const HomeMain = ({ navigation }) => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  return (
    <Container>
      <NavBar selectedStack={"HomeStack"}>
        <HomeHeader title="DANBEE CLASS" />
        <View style={{ marginTop: d.px * 8 }}>
          <TitleBox title={"수강강좌"} />
          <MyClassList items={["가상현실", "데이터베이스", "컴퓨터구조"]} />
        </View>
        <View style={{ marginTop: d.px * 8 }}>
          <TitleBox title={"공지사항"} />
          <MyClassList items={["공지사항1", "공지사항2", "공지사항3"]} />
        </View>
      </NavBar>
    </Container>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default HomeMain;
