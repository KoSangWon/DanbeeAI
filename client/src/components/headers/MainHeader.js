import * as React from "react";
import { withNavigation } from "@react-navigation/compat";
import { d } from "../../utils/size";
import { Header, Icon, Body, Right, Text, Title, Left } from "native-base";
import { Entypo } from "@expo/vector-icons";

const MainHeader = ({ navigation, title }) => {
  return (
    <Header transparent>
      <Left />
      <Body>
        <Title style={{ color: "black" }}>{title}</Title>
      </Body>
      <Right />
      {/* <Right>
                 <Entypo onPress={() => {navigation.navigate('Cart')}} name='shopping-bag' style={{ marginRight:d.px*15, fontSize:d.px*25}}/>
            </Right> */}
    </Header>
  );
};

export default withNavigation(MainHeader);
