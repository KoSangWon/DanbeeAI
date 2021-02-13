import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyMain from '../../screens/home/MyMain';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyMain" component={MyMain} />
    </Stack.Navigator>
  );
};
