import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeMain from "../../screens/home/HomeMain";
import NoticeMain from '../../screens/home/NoticeMain';
import ClassWebView from '../../components/like/ClassWebView';
import ReviewBoard from '../../screens/board/ReviewBoard';
import RegisterBoard from '../../screens/board/RegisterBoard';

const Stack = createStackNavigator();

export default () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={HomeMain}
      >
        <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="NoticeMain" component={NoticeMain} />
        <Stack.Screen name='ClassWebView' component={ClassWebView} />
        <Stack.Screen name='ReviewBoard' component={ReviewBoard} />
        <Stack.Screen name='RegisterBoard' component={RegisterBoard} />
      </Stack.Navigator>
    );
};
