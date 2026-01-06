import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './style';

type skipButtonProps = {
  onPress: () => void;
};

const SkipButton = ({ onPress }: skipButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Skip</Text>
      <Image
        style={styles.icon}
        source={require('../../assets/icons/rightArrow.png')}
      />
    </TouchableOpacity>
  );
};

export default SkipButton;
