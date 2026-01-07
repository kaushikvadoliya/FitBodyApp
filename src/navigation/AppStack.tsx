import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetUpScreen from '../screens/SetUpScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SetUp" component={SetUpScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
