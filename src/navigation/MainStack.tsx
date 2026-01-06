import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
