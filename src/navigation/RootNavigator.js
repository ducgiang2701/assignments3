import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonScreen, ListButtons} from '../screen';
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ButtonScreen"
        component={ButtonScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="ListButton" component={ListButtons} />
    </Tab.Navigator>
  );
};
export default RootNavigator;
