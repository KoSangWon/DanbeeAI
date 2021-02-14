import { Container, Text, View } from "native-base";
import React from "react";
import MainHeader from "../../components/headers/MainHeader";
import NavBar from "../../navigations/NavBar";

const InfoMain = () => {
  return (
    <Container>
      <NavBar selectedStack={"InfoStack"}>
        <MainHeader title="자료실" />
        <View>
          <Text>홈화면</Text>
        </View>
      </NavBar>
    </Container>
  );
};

export default InfoMain;
