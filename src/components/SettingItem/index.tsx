import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type SettingItemProps = {
  icon?: ImageSourcePropType;
  text: string;
  buttonIcon?: ImageSourcePropType;
  onPress?: () => void;
};

const SettingItem = ({ icon, buttonIcon, text, onPress }: SettingItemProps) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.container}>
        {icon && (
          <View style={styles.iconContainer}>
            <Image
              resizeMode="contain"
              tintColor={colors.white}
              style={styles.icon}
              source={icon}
            />
          </View>
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
      {buttonIcon && (
        <Image
          source={buttonIcon}
          style={styles.buttonIcon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default SettingItem;
