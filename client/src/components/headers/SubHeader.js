import * as React from "react";
import { withNavigation } from "@react-navigation/compat";
import { d } from "../../utils/size";
import { Header, Icon, Body, Right, Text, Title, Left } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { c } from "../../utils/color";

const SubHeader = ({ navigation, title }) => {
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <Header
      style={{
        borderBottomColor: c.mainColorDark,
        borderBottomWidth: d.px * 1,
      }}
      transparent
    >
      <Left>
        <Icon
          onPress={onPressBack}
          name="arrow-back"
          style={{ color: "black", paddingLeft: 10 }}
        />
      </Left>
      <Body>
        <Title style={{ color: "black" }}>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default withNavigation(SubHeader);
