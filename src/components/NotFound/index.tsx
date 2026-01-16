import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const NotFound = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: normalize(30),
          fontWeight: '700',
          color: colors.grey,
        }}
      >
        Not Found
      </Text>
    </View>
  );
};

export default NotFound;
