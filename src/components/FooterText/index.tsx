import { Text } from 'react-native';
import React from 'react';
import styles from './style';

type FooterTextProps = {
  text: string;
  buttonText: string;
  onPress: () => void;
};

const FooterText = ({ text, buttonText, onPress }: FooterTextProps) => {
  return (
    <Text style={styles.text}>
      {text}
      <Text onPress={onPress} style={styles.buttonText}>
        {buttonText}
      </Text>
    </Text>
  );
};

export default FooterText;
