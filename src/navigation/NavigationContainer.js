import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
