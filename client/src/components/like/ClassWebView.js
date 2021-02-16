import { Container, View } from "native-base";
import React from "react";
import { WebView } from "react-native-webview";
import SubHeader from "../headers/SubHeader";

const ClassWebView = ({ route }) => {
  const { uri } = route.params;
  return (
    <Container>
      <SubHeader title={"강좌"} />
      <WebView source={{ uri }} style={{ marginTop: 20 }} />
    </Container>
  );
};

export default ClassWebView;
