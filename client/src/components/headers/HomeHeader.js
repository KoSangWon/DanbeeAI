import * as React from "react";
import { withNavigation } from "@react-navigation/compat";
import { d } from "../../utils/size";
import { Header, Icon, Body, Right, Text, Title, Left } from "native-base";
import { Entypo } from "@expo/vector-icons";

const HomeHeader = ({ navigation, title }) => {
  return (
    <Header transparent>
      <Body>
        <Title style={{ color: "black" }}>{title}</Title>
      </Body>
    </Header>
  );
};

export default withNavigation(HomeHeader);
