import React, { useState, useCallback, useEffect } from "react";
import {
  Container,
  Content,
  Thumbnail,
  Text,
  View,
  Spinner,
} from "native-base";
import { StyleSheet, RefreshControl } from "react-native";
import { gql, useLazyQuery } from "@apollo/client";
import { d } from "../../utils/size";
import { c } from "../../utils/color";
import { useSelector } from "react-redux";
import NavBar from "../../navigations/NavBar";
import MainHeader from "../../components/headers/MainHeader";
import MyBox from "../../components/my/MyBox";
import { TouchableOpacity } from "react-native-gesture-handler";

const USER_PROFILE_QUERY = gql`
  query {
    profile {
      username
      point
      id
    }
  }
`;

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const MyMain = ({ navigation }) => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  // console.log("Main화면에서 login되어 있나?", isLoggedIn);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    runFunc();
    wait(1000).then(() => setRefreshing(false));
  }, [runFunc]);

  //refreshing 할 때도 사용할 수 있도록 useLazyQuery 사용
  const [runFunc, { loading, error, data }] = useLazyQuery(USER_PROFILE_QUERY, {
    pollInterval: 2000,
  });
  console.log("dataaa", data);
  useEffect(() => {
    if (isLoggedIn) {
      runFunc();
    }
  }, [isLoggedIn]);

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>가져오지 못했습니다.</Text>
      </View>
    );
  }

  return (
    <NavBar selectedStack={"MyStack"}>
      <Container style={styles.container}>
        <MainHeader title="마이페이지" />
        <Content
          padder
          showsVerticalScrollIndicator={false}
          refreshControl={
            isLoggedIn ? (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            ) : null
          }
        >
          <View style={styles.profileContainer}>
            <View style={styles.infoContainer}>
              <Thumbnail
                width={d.px * 42}
                height={d.px * 42}
                source={require("../../../assets/logo.png")}
              />

              <Text style={styles.userIdContainer}>
                {isLoggedIn ? (
                  data ? (
                    data?.profile?.username
                  ) : (
                    <Spinner />
                  )
                ) : (
                  "로그인해서 닉네임을 설정해주세요!"
                )}
              </Text>
            </View>
            {isLoggedIn ? (
              <View style={styles.editContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EditPersonalInfo")}
                  style={{ ...styles.editBox }}
                >
                  <Text style={styles.editText}>개인정보 수정</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          {isLoggedIn ? (
            <View style={styles.pointContainer}>
              <Text style={styles.pointTitle}>포인트</Text>
              <Text style={styles.myPoint}>
                {data ? data.profile?.point : <Spinner />} p
              </Text>
            </View>
          ) : null}

          <View style={{ margin: d.px * 8 }}></View>

          <View>
            {isLoggedIn ? null : (
              <View style={styles.bigContainer}>
                <Text style={styles.category}>로그인</Text>
                <View style={{ flexDirection: "row" }}>
                  <MyBox title="로그인" stack="MyStack" screen="LoginMain" />
                  <MyBox title="회원가입" stack="MyStack" screen="SignUpMain" />
                </View>
              </View>
            )}

            {isLoggedIn ? (
              <View style={styles.bigContainer}>
                <Text style={styles.category}>MY</Text>
                <View style={{ flexDirection: "row" }}>
                  <MyBox title="MY 리뷰" stack="MyStack" screen="MyReview" />
                  <MyBox
                    title="MY 알림"
                    stack="MyStack"
                    screen="MyNotification"
                  />
                </View>
              </View>
            ) : null}

            <View style={styles.bigContainer}>
              <Text style={styles.category}>서비스 설정</Text>
              <View style={{ flexDirection: "row" }}>
                <MyBox title="설정" stack="MyStack" screen="SettingMain" />
              </View>
            </View>
            <View style={styles.bigContainer}>
              <Text style={styles.category}>고객센터</Text>
              <View style={{ flexDirection: "row" }}>
                <MyBox title="공지사항" stack="MyStack" screen="Notification" />
                <MyBox
                  title="자주하는 질문"
                  stack="MyStack"
                  screen="FrequentQuestion"
                />
                <MyBox
                  title="1:1문의"
                  stack="MyStack"
                  screen="PersonalQuestion"
                />
              </View>
            </View>
          </View>
          <Text style={styles.notice}>
            Codi의 상품 주문, 배송 및 환불의 의무와 책임은 각 판매처에 있습니다.
          </Text>
          <View style={styles.otherNoticeContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MyStack", { screen: "PrivacyPolicy" })
              }
            >
              <Text style={styles.otherNotice}>개인정보 처리 방침</Text>
            </TouchableOpacity>
            <Text style={styles.otherNotice}> | </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MyStack", { screen: "TermsOfUse" })
              }
            >
              <Text style={styles.otherNotice}>이용약관</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ alignItems: "center" }}>
            <Image source={require("../../../assets/logo.png")} />
          </View> */}
          <View style={{ margin: d.px * 10 }}></View>
        </Content>
      </Container>
    </NavBar>
  );
};

export default MyMain;

const styles = StyleSheet.create({
  container: {
    marginLeft: d.px * 5,
    marginRight: d.px * 5,
  },
  profileContainer: {
    flexDirection: "row",
    height: d.px * 70.3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: d.px * 18.3,
    borderBottomWidth: d.px * 1,
    borderBottomColor: "lightgray",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIdContainer: {
    marginLeft: d.px * 10.5,
    fontSize: d.px * 16,
    fontWeight: "500",
    color: c.mainBlack,
  },
  editContainer: {},
  editBox: {
    borderWidth: d.px * 2,
    borderColor: c.mainColor,
    backgroundColor: c.mainColor,
    borderRadius: d.px * 15,
  },
  editText: {
    margin: d.px * 3,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "500",
    color: c.mainBlack,
    fontSize: d.px * 13,
  },
  pointContainer: {
    height: d.px * 62,
    flexDirection: "row",
    borderBottomWidth: d.px * 1,
    borderBottomColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  pointTitle: {
    fontSize: d.px * 17,
    fontWeight: "500",
    marginRight: d.px * 7,
    color: c.mainBlack,
  },
  myPoint: {
    fontSize: d.px * 22,
    fontWeight: "500",
    marginLeft: d.px * 7,
    color: c.mainBlack,
  },
  bigContainer: {
    paddingBottom: d.px * 20,
    marginBottom: d.px * 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: d.px * 1,
  },
  category: {
    marginLeft: d.px * 10,
    fontSize: d.px * 13,
    margin: d.px * 5,
  },
  menuTopContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: d.px * 17.3,
  },
  menuBottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  notice: {
    width: d.px * 254,
    marginTop: d.px * 76,
    marginLeft: d.px * 20,
    fontSize: d.px * 12,
  },
  otherNoticeContainer: {
    marginTop: d.px * 21,
    marginLeft: d.px * 20,
    flexDirection: "row",
    alignItems: "center",
  },
  otherNotice: {
    fontSize: d.px * 12,
  },
});
