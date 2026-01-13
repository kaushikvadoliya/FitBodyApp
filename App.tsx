import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const App = () => {
  return (
    <KeyboardProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </KeyboardProvider>
  );
};

export default App;
