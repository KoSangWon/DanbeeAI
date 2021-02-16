import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LikeMain from '../../screens/like/LikeMain';
import ClassWebView from '../../components/like/ClassWebView';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LikeMain' component={LikeMain} />
      <Stack.Screen name='ClassWebView' component={ClassWebView} />
    </Stack.Navigator>
  );
};
