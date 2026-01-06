import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <View>
      <Text>AppStack</Text>
    </View>
  );
};

export default AppStack;
