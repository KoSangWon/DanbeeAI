import { Container, Text, View } from "native-base";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import SubHeader from "../../components/headers/SubHeader";
import { c } from "../../utils/color";
import { d } from "../../utils/size";

const NoticeMain = ({ route }) => {
  const { title, content } = route.params;
  return (
    <Container>
      <SubHeader title={"공지 내용"} />
      <ScrollView>
        <View
          style={{
            padding: d.px * 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: c.darkBlueColor,
              fontSize: d.px * 18,
              marginRight: d.px * 20,
              backgroundColor: c.mainColorLight,
              padding: d.px * 10,
            }}
          >
            {"제목"}
          </Text>
          <View style={{ paddingRight: d.px * 100 }}>
            <Text style={{ fontSize: d.px * 18 }}>{title}</Text>
          </View>
        </View>
        <View
          style={{
            padding: d.px * 19,
            borderWidth: d.px * 0.7,
            borderColor: c.mainColorDark,
          }}
        >
          <Text style={{ fontSize: d.px * 20 }}>{content}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default NoticeMain;
