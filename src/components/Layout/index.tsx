import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

type LayoutProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  fullScreen?: boolean;
};

const Layout = ({ children, style, fullScreen }: LayoutProps) => {
  if (fullScreen) {
    return (
      <View style={[style, styles.container]}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={30}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    );
  }
  return (
    <SafeAreaView style={[style, styles.container]}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={30}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Layout;
