import { Container, Text, View } from "native-base";
import React from "react";
import NavBar from "../../navigations/NavBar";

const HomeMain = () => {
  return (
    <Container>
      <NavBar selectedStack={"HomeStack"}>
        <View>
          <Text>홈화면</Text>
        </View>
      </NavBar>
    </Container>
  );
};

export default HomeMain;
