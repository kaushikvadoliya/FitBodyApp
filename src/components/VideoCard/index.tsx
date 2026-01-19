import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';

import { colors } from '../../utils/colors';

type VideoCardProps = {
  text: string;
  image: ImageSourcePropType;
  favourite?: boolean;
  time: number;
  kcal: number;
  onStar?: () => void;
};

const VideoCard = ({
  text,
  image,
  time,
  kcal,
  favourite,
  onStar,
}: VideoCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity onPress={onStar} style={styles.starContainer}>
          <Image
            style={styles.star}
            tintColor={favourite ? colors.secondary : colors.white}
            source={require('../../assets/icons/star.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.timerKcalContainer}>
          <View style={styles.timerContainer}>
            <Image
              resizeMode="contain"
              source={require('../../assets/icons/time.png')}
              style={styles.icon}
              tintColor={colors.purple}
            />
            <Text style={styles.timerText}>{time} Minutes</Text>
          </View>
          <View style={styles.timerContainer}>
            <Image
              source={require('../../assets/icons/calories.png')}
              resizeMode="contain"
              style={styles.icon}
              tintColor={colors.purple}
            />
            <Text style={styles.timerText}>{kcal} Kcal</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.playIcon}>
        <Image
          source={require('../../assets/icons/playVideo.png')}
          resizeMode="contain"
          style={styles.play}
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;
