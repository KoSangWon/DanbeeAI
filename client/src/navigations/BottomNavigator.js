import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './tabs/HomeStack';
import LikeStack from './tabs/LikeStack';
import BoardStack from './tabs/BoardStack';
import InfoStack from './tabs/InfoStack';
import MyStack from './tabs/MyStack';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='HomeStack'>
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name='LikeStack'
        component={LikeStack}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name='BoardStack'
        component={BoardStack}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name='InfoStack'
        component={InfoStack}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name='MyStack'
        component={MyStack}
        options={{tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;