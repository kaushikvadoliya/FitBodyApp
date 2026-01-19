import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './style';
import { verticalScale } from '../../helper/Scaling';

type varientType = 'lg' | 'sm';

type FeatureCardProps = {
  varient: varientType;
  time?: number;
  kcal?: number;
  title?: string;
  cornerText?: string;
  excercise?: number;
  backgroundImage: ImageSourcePropType;
  favorite?: boolean;
  onFavrotePress?: () => void;
  onPress?: () => void;
};

const FeatureCard = ({
  time,
  varient,
  title,
  backgroundImage,
  kcal,
  excercise,
  onPress,
  cornerText,
  favorite,
  onFavrotePress,
}: FeatureCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={backgroundImage}
        style={[
          styles.card,
          varient === 'lg'
            ? { height: verticalScale(198) }
            : { height: verticalScale(156) },
        ]}
      >
        <Text style={styles.cornerText}>{cornerText}</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomTextContainer}>
            {varient === 'lg' && <Text style={styles.title}>{title}</Text>}
            <View style={styles.bottomLowerContainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={colors.white}
                  source={require('../../assets/icons/time.png')}
                />
                <Text style={styles.text}>{time} Minutes</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={colors.white}
                  source={require('../../assets/icons/calories.png')}
                />
                <Text style={styles.text}>{kcal} Kcal</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={colors.white}
                  source={require('../../assets/icons/workOut.png')}
                />
                <Text style={styles.text}>{excercise} Exercises</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={onFavrotePress}>
            <Image
              style={varient === 'lg' ? styles.star : styles.smStar}
              tintColor={favorite ? colors.secondary : colors.white}
              source={require('../../assets/icons/star.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FeatureCard;
