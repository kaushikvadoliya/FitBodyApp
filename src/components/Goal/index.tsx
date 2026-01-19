import { Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type GoalType = {
  text: string;
  select: string;
  onPress: () => void;
};

const Goal = ({ text, select, onPress }: GoalType) => {
  const isSelected = select === text;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isSelected ? colors.black : colors.white },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: isSelected ? colors.white : colors.black },
        ]}
      >
        {text}
      </Text>
      <Image
        resizeMode="contain"
        source={
          isSelected
            ? require('../../assets/icons/check.png')
            : require('../../assets/icons/circle.png')
        }
      />
    </TouchableOpacity>
  );
};

export default Goal;
