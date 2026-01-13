import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  FlatList,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type HomeIconsProps = {
  onWorkOut?: () => void;
  onProgress?: () => void;
  onNutrition?: () => void;
  onCommunity?: () => void;
  style?: StyleProp<ViewStyle>;
};

type iconType = {
  id: number;
  text: string;
  icon: ImageSourcePropType;
  onPress: (() => void) | undefined;
};

const HomeIcons = ({
  onCommunity,
  onNutrition,
  onProgress,
  style,
  onWorkOut,
}: HomeIconsProps) => {
  const iconData: iconType[] = [
    {
      id: 1,
      text: 'WorkOut',
      icon: require('../../assets/icons/dumble.png'),
      onPress: onWorkOut,
    },
    {
      id: 2,
      text: 'Progress\nTracking',
      icon: require('../../assets/icons/progressTracker.png'),
      onPress: onProgress,
    },
    {
      id: 3,
      text: 'Nutrition',
      icon: require('../../assets/icons/nutrition.png'),
      onPress: onNutrition,
    },
    {
      id: 4,
      text: 'Community',
      icon: require('../../assets/icons/community.png'),
      onPress: onCommunity,
    },
  ];
  return (
    <FlatList
      data={iconData}
      keyExtractor={item => item.id.toString()}
      horizontal
      style={style}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.container} onPress={item.onPress}>
            <Image
              style={styles.icon}
              source={item.icon}
              resizeMode="contain"
              tintColor={colors.primary}
            />
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        );
      }}
      ItemSeparatorComponent={() => <View style={styles.seprator} />}
    />
  );
};

export default HomeIcons;
