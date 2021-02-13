import { Container, Text, View } from "native-base";
import React from "react";
import NavBar from "../../navigations/NavBar";

const BoardMain = () => {
  return (
    <Container>
      <NavBar selectedStack={"BoardStack"}>
        <View>
          <Text>sdfsdf</Text>
        </View>
      </NavBar>
    </Container>
  );
};

export default BoardMain;
