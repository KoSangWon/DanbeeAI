import React from "react";
import { Spinner, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { c } from "../../utils/color";
import { d } from "../../utils/size";
import MyClassItem from "./MyClassItem";
import NoticeItem from "./NoticeItem";
import { gql, useQuery } from "@apollo/client";

const NOTICE_QUERY = gql`
  query {
    notices {
      id
      title
      content
    }
  }
`;

const NoticeList = () => {
  const { loading, error, data } = useQuery(NOTICE_QUERY);
  if (loading)
    return (
      <View
        styles={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <Spinner />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>ID를 가져오지 못했습니다.</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {data.notices.map((item, index) => (
          <NoticeItem key={index} item={item} index={index} />
        ))}
      </View>
    </View>
  );
};

export default NoticeList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: d.px * 15,
    paddingRight: d.px * 15,
    paddingTop: d.px * 7,
  },
  subcontainer: {
    padding: d.px * 5,
    borderColor: c.mainColorDark,
    borderLeftWidth: d.px * 4,
    borderBottomRightRadius: d.px * 3,
    borderTopRightRadius: d.px * 3,
  },
  title: {
    fontSize: d.px * 14,
  },
});
