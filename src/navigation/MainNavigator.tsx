import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

export type MainNavigatorParamsType = {
  Home: undefined;
};

const Stack = createStackNavigator<MainNavigatorParamsType>();

const screenOptions: StackNavigationOptions = {
  presentation: 'transparentModal',
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          backgroundColor: 'white',
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
