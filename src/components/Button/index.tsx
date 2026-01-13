import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type varient = 'sm' | 'md' | 'lg' | 'full';

type ButtonTabType = {
  varient: varient;
  select: string;
  text: string;
  onPress: () => void;
};

const Button = ({ varient, text, select, onPress }: ButtonTabType) => {
  const isSelected = select === text;

  const getContainerStyle = () => {
    switch (varient) {
      case 'lg': {
        return styles.lgContainer;
      }
      case 'md': {
        return styles.mdContainer;
      }
      case 'sm': {
        return styles.smContainer;
      }
      default: {
        return styles.container;
      }
    }
  };

  const getTextStyle = () => {
    switch (varient) {
      case 'lg': {
        return styles.lgText;
      }
      case 'md': {
        return styles.mdText;
      }
      case 'sm': {
        return styles.smText;
      }
      default: {
        return styles.text;
      }
    }
  };
  return (
    <TouchableOpacity
      style={[
        getContainerStyle(),
        {
          backgroundColor: isSelected ? colors.secondary : colors.white,
          justifyContent: 'center',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          getTextStyle(),
          {
            color: isSelected ? colors.black : colors.purple,
            textAlign: 'center',
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
