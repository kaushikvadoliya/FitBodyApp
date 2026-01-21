import {
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';

type PlayVideoCardProps = {
  favorite?: boolean;
  height?: number;
  image: ImageSourcePropType;
  star?: boolean;
  onFavoritePress?: () => void;
};

const PlayVideoCard = ({
  favorite,
  star,
  height,
  onFavoritePress,
  image,
}: PlayVideoCardProps) => {
  return (
    <ImageBackground borderRadius={20} source={image}>
      <View
        style={
          height
            ? [styles.heightContainer, { height: verticalScale(height) }]
            : styles.container
        }
      >
        {star && (
          <TouchableOpacity
            onPress={onFavoritePress}
            style={styles.starContainer}
          >
            <Image
              source={require('../../assets/icons/star.png')}
              tintColor={favorite ? colors.secondary : colors.white}
              style={styles.star}
            />
          </TouchableOpacity>
        )}
        <Image
          style={styles.playIcon}
          source={require('../../assets/icons/playLg.png')}
        />
      </View>
    </ImageBackground>
  );
};

export default PlayVideoCard;
