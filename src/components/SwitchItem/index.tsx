import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { colors } from '../../utils/colors';
import Animated from 'react-native-reanimated';

type toggleSwitchProps = {
  text: string;
  enabled?: boolean;
};

const SwitchItem = ({ text, enabled }: toggleSwitchProps) => {
  const [toggle, setToggle] = useState(enabled);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View
        style={[
          styles.track,
          { backgroundColor: toggle ? colors.secondary : colors.primary },
        ]}
      >
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <Animated.View
            style={[
              styles.thumb,
              {
                transform: [{ translateX: toggle ? 8 : -8 }],
                transitionProperty: 'transform',
                transitionDuration: 200,
                transitionTimingFunction: 'linear',
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwitchItem;
