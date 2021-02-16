import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Spinner, View } from "native-base";
import { StyleSheet } from "react-native";
import { d } from "../../utils/size";
import NavBar from "../../navigations/NavBar";
import HomeHeader from "../../components/headers/HomeHeader";
import TitleBox from "../../components/home/TitleBox";
import MyClassList from "../../components/home/MyClassList";
import NoticeList from "../../components/home/NoticeList";
import { ScrollView } from "react-native-gesture-handler";
import HomeReviewList from "../../components/home/HomeReviewList";

const HomeMain = ({ navigation }) => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  return (
    <Container>
      <NavBar selectedStack={"HomeStack"}>
        <HomeHeader title="DANBEE CLASS" />
        <ScrollView>
          <View style={{ marginTop: d.px * 8 }}>
            <TitleBox title={"수강강좌"} />
            <MyClassList />
          </View>
          <View style={{ marginTop: d.px * 8 }}>
            <TitleBox title={"공지사항"} />
            <NoticeList />
          </View>
          <View style={{ marginTop: d.px * 8 }}>
            <TitleBox title={"게시판"} />
            <HomeReviewList />
          </View>
        </ScrollView>
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
