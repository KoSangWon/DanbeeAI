import * as React from "react";
import { withNavigation } from "@react-navigation/compat";
import { d } from "../../utils/size";
import {
  Header,
  Icon,
  Body,
  Right,
  Text,
  Title,
  Left,
  View,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { c } from "../../utils/color";

const MainHeader = ({ navigation, title }) => {
  return (
    <Header
      style={{
        borderBottomColor: c.mainColorDark,
        borderBottomWidth: d.px * 1,
      }}
      transparent
    >
      <Left />
      <Body>
        <Title style={{ color: "black" }}>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default withNavigation(MainHeader);
