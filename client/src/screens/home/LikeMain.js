import { Container, Text, View } from "native-base";
import React from "react";
import NavBar from "../../navigations/NavBar";

const LikeMain = () => {
  return (
    <Container>
      <NavBar selectedStack={"LikeStack"}>
        <View>
          <Text>홈화면</Text>
        </View>
      </NavBar>
    </Container>
  );
};

export default LikeMain;
