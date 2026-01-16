import React from 'react';
import MainStack, { navigationRef } from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <KeyboardProvider>
          <NavigationContainer ref={navigationRef}>
            <MainStack />
          </NavigationContainer>
        </KeyboardProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
