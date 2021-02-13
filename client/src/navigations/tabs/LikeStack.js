import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LikeMain from '../../screens/home/LikeMain';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LikeMain' component={LikeMain} />
    </Stack.Navigator>
  );
};
