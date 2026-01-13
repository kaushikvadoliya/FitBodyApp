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
  transpharent?: boolean;
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

const PrimaryButton = ({
  onPress,
  transpharent,
  text,
  style,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[transpharent ? styles.transpharentButton : styles.button, style]}
      {...rest}
    >
      <Text
        style={transpharent ? styles.transpharentButtonText : styles.buttonText}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
