import React, { ReactNode } from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import styles from './style';

type LayoutProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  fullScreen?: boolean;
  scrolled?: boolean;
} & SafeAreaViewProps;

const Layout = ({ children, style, scrolled, fullScreen }: LayoutProps) => {
  const Wrapper = fullScreen ? View : SafeAreaView;
  if (!scrolled) {
    return (
      <Wrapper style={[{ flex: 1 }, styles.container, style]}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          {children}
        </KeyboardAvoidingView>
      </Wrapper>
    );
  }
  return (
    <Wrapper style={[{ flex: 1 }, styles.container, style]}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default Layout;
