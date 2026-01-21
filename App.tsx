import React from 'react';
import MainStack, { navigationRef } from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ToastProvider } from 'react-native-toast-notifications';
import FavoriteProcider from './src/context/FavoriteContext';

const App = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <KeyboardProvider>
          <FavoriteProcider>
            <NavigationContainer ref={navigationRef}>
              <ToastProvider>
                <MainStack />
              </ToastProvider>
            </NavigationContainer>
          </FavoriteProcider>
        </KeyboardProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
