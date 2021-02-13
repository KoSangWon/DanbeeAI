import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyMain from "../../screens/my/MyMain";
import LoginMain from "../../screens/my/LoginMain";
import SettingMain from "../../screens/my/SettingMain";
import SignUpMain from "../../screens/my/SignUpMain";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyMain" component={MyMain} />
      <Stack.Screen name="LoginMain" component={LoginMain} />
      <Stack.Screen name="SettingMain" component={SettingMain} />
      <Stack.Screen name="SignUpMain" component={SignUpMain} />
    </Stack.Navigator>
  );
};
