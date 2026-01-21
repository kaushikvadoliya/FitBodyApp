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
import { horizontalScale, verticalScale } from '../../helper/Scaling';

type VideoCardProps = {
  text: string;
  image: ImageSourcePropType;
  favourite?: boolean;
  time?: number;
  kcal?: number;
  onStar?: () => void;
  repetition?: number;
  lowerContainerHeight?: number;
  onSelect?: () => void;
  playIcon?: boolean;
  onPlay?: () => void;
  select?: boolean;
  add?: boolean;
};

const VideoCard = ({
  text,
  playIcon,
  image,
  time,
  onSelect,
  repetition,
  kcal,
  add,
  favourite,
  onPlay,
  lowerContainerHeight,
  onStar,
  select,
}: VideoCardProps) => {
  return (
    <View
      style={[
        styles.container,
        lowerContainerHeight
          ? {
              height: verticalScale(150),
              marginHorizontal: horizontalScale(5),
            }
          : { height: verticalScale(138) },
      ]}
    >
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
      <View
        style={[
          styles.lowerContainer,
          lowerContainerHeight
            ? { height: verticalScale(lowerContainerHeight) }
            : { height: verticalScale(46) },
        ]}
      >
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
            {kcal && <Text style={styles.timerText}>{kcal} Kcal</Text>}
            {repetition && (
              <Text style={styles.timerText}>{repetition} Rep</Text>
            )}
          </View>
        </View>
      </View>
      {playIcon && (
        <TouchableOpacity style={styles.playIcon} onPress={onPlay}>
          <Image
            source={require('../../assets/icons/playVideo.png')}
            resizeMode="contain"
            style={styles.play}
          />
        </TouchableOpacity>
      )}
      {add && (
        <TouchableOpacity style={styles.playIcon} onPress={onSelect}>
          <Image
            source={
              select
                ? require('../../assets/icons/select.png')
                : require('../../assets/icons/add.png')
            }
            resizeMode="contain"
            style={styles.play}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
