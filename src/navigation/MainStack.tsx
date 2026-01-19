import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTab from './AppTab';
import AuthStack from './AuthStack';
import { createNavigationContainerRef } from '@react-navigation/native';
import { StackParams } from './navigationType';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef<StackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
      <Stack.Screen name="AppTab" component={AppTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
