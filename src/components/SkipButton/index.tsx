import {
  Text,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './style';

type skipButtonProps = {
  onPress: () => void;
  style: StyleProp<ViewStyle>;
};

const SkipButton = ({ onPress, style }: skipButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>Skip</Text>
      <Image
        style={styles.icon}
        source={require('../../assets/icons/rightArrow.png')}
      />
    </TouchableOpacity>
  );
};

export default SkipButton;
