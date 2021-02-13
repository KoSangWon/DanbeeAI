import { Container, Text, View } from "native-base";
import React from "react";
import NavBar from "../../navigations/NavBar";

const InfoMain = () => {
  return (
    <Container>
      <NavBar selectedStack={"InfoStack"}>
        <View>
          <Text>홈화면</Text>
        </View>
      </NavBar>
    </Container>
  );
};

export default InfoMain;
