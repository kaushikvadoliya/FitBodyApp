import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './style';

type ButtonProps = {
  text: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

const PrimaryButton = ({ onPress, text, style }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {/* <BlurView blurAmount={4} blurType="light" style={styles.blurContainer}> */}
      <Text style={styles.buttonText}>{text}</Text>
      {/* </BlurView> */}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
