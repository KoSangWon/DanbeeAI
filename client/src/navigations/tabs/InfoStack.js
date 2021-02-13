import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfoMain from '../../screens/home/InfoMain';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='InfoMain' component={InfoMain} />
    </Stack.Navigator>
  );
};
