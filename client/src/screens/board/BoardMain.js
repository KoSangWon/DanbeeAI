import { Container, Text, View } from "native-base";
import React from "react";
import BoardList from "../../components/board/BoardList";
import MainHeader from "../../components/headers/MainHeader";
import NavBar from "../../navigations/NavBar";

const BoardMain = () => {
  return (
    <Container>
      <NavBar selectedStack={"BoardStack"}>
        <MainHeader title="게시판" />
        <BoardList/>
      </NavBar>
    </Container>
  );
};

export default BoardMain;
