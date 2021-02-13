import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from "@react-navigation/compat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { d } from "../utils/size";
import { c } from "../utils/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavBar = ({ children, navigation, selectedStack }) => {
  return (
    <View style={styles.screen}>
      {children}
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.tab}
          onPress={() => {
            navigation.navigate("HomeStack");
          }}
        >
          <MaterialCommunityIcons
            name={selectedStack === "HomeStack" ? "home" : "home-outline"}
            style={
              selectedStack === "HomeStack" ? styles.selectedIcon : styles.icon
            }
          />
          <Text
            style={
              selectedStack === "HomeStack"
                ? styles.selectedTitle
                : styles.title
            }
          >
            홈
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.tab}
          onPress={() => {
            navigation.navigate("LikeStack");
          }}
        >
          <MaterialCommunityIcons
            name={selectedStack === "LikeStack" ? "heart" : "heart-outline"}
            style={
              selectedStack === "LikeStack" ? styles.selectedIcon : styles.icon
            }
          />
          <Text
            style={
              selectedStack === "LikeStack"
                ? styles.selectedTitle
                : styles.title
            }
          >
            전체강좌
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.tab}
          onPress={() => {
            navigation.navigate("BoardStack");
          }}
        >
          <MaterialCommunityIcons
            name={
              selectedStack === "BoardStack"
                ? "tshirt-crew"
                : "tshirt-crew-outline"
            }
            style={
              selectedStack === "BoardStack" ? styles.selectedIcon : styles.icon
            }
          />
          <Text
            style={
              selectedStack === "BoardStack"
                ? styles.selectedTitle
                : styles.title
            }
          >
            게시판
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.tab}
          onPress={() => {
            navigation.navigate("InfoStack");
          }}
        >
          <MaterialCommunityIcons
            name={selectedStack === "InfoStack" ? "dresser" : "dresser-outline"}
            style={
              selectedStack === "InfoStack" ? styles.selectedIcon : styles.icon
            }
          />
          <Text
            style={
              selectedStack === "InfoStack"
                ? styles.selectedTitle
                : styles.title
            }
          >
            자료실
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.tab}
          onPress={() => {
            navigation.navigate("MyStack");
          }}
        >
          <MaterialCommunityIcons
            name={selectedStack === "MyStack" ? "account" : "account-outline"}
            style={
              selectedStack === "MyStack" ? styles.selectedIcon : styles.icon
            }
          />
          <Text
            style={
              selectedStack === "MyStack" ? styles.selectedTitle : styles.title
            }
          >
            마이
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(NavBar);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    paddingLeft: d.px * 30,
    paddingRight: d.px * 30,
    justifyContent: "space-between",
    height: d.px * 75,
    width: d.width,
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    backgroundColor: c.mainBlack,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingTop: d.px * 10,
  },
  icon: {
    alignItems: "center",
    fontSize: 30,
    color: c.mainWhite,
  },
  selectedIcon: {
    alignItems: "center",
    fontSize: 30,
    color: c.mainColorDark,
  },
  title: {
    color: c.mainWhite,
    fontSize: d.px * 12,
  },
  selectedTitle: {
    color: c.mainColorDark,
    fontSize: d.px * 12,
  },
});
