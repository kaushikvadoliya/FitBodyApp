import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type RoundItemProps = {
  title: string;
  time: number;
  repetition: number;
  favorite?: boolean;
  onPress?: () => void;
};

const RoundItem = ({
  time,
  title,
  repetition,
  favorite,
  onPress,
}: RoundItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        {favorite ? (
          <Image
            source={require('../../assets/icons/playSecondry.png')}
            resizeMode="contain"
            style={styles.playIcon}
          />
        ) : (
          <Image
            source={require('../../assets/icons/playPrimary.png')}
            resizeMode="contain"
            style={styles.playIcon}
          />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.timeContainer}>
            <Image
              source={require('../../assets/icons/time.png')}
              resizeMode="contain"
              style={styles.timeIcon}
              tintColor={colors.primary}
            />
            <Text style={styles.time}>00:{time}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.repetitionText}>Repetition {repetition}x</Text>
    </TouchableOpacity>
  );
};

export default RoundItem;
