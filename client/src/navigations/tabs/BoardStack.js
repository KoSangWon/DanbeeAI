import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardMain from '../../screens/home/BoardMain';

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
    </Stack.Navigator>
  );
};
