import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type toggleSwitchProps = {
  text: string;
  enabled?: boolean;
};

const SwitchItem = ({ text, enabled }: toggleSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch
        trackColor={{ false: colors.secondary, true: colors.primary }}
        thumbColor={isEnabled ? colors.white : colors.white}
        ios_backgroundColor={colors.secondary}
        value={isEnabled}
        onValueChange={toggleSwitch}
      />
    </View>
  );
};

export default SwitchItem;
