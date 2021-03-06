import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardMain from '../../screens/board/BoardMain';
import RegisterBoard from '../../screens/board/RegisterBoard';
import ReviewBoard from '../../screens/board/ReviewBoard';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={BoardMain}
    >
      <Stack.Screen name='BoardMain' component={BoardMain} />
      <Stack.Screen name='RegisterBoard' component={RegisterBoard} />
      <Stack.Screen name='ReviewBoard' component={ReviewBoard} />


    </Stack.Navigator>
  );
};
