import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
