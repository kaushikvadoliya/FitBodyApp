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

type WorkoutCardProps = {
  text: string;
  image: ImageSourcePropType;
  favourite?: boolean;
  time: number;
  kcal: number;
};

const WorkoutCard = ({
  text,
  image,
  time,
  kcal,
  favourite,
}: WorkoutCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
        <TouchableOpacity style={styles.star}>
          <Image
            tintColor={favourite ? colors.secondary : colors.white}
            source={require('../../assets/icons/star.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.timerKcalContainer}>
          <View style={styles.timerContainer}>
            <Image
              source={require('../../assets/icons/time.png')}
              style={styles.icon}
            />
            <Text style={styles.timerText}>{time} Minutes</Text>
          </View>
          <View style={styles.timerContainer}>
            <Image
              source={require('../../assets/icons/calories.png')}
              style={styles.icon}
            />
            <Text style={styles.timerText}>{kcal} Kcal</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.playIcon}>
        <Image source={require('../../assets/icons/playVideo.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutCard;
