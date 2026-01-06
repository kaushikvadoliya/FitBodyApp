import { Platform, StyleProp, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

type LayoutProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Layout = ({ children, style }: LayoutProps) => {
  return (
    <SafeAreaView style={[style, styles.container]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Layout;
