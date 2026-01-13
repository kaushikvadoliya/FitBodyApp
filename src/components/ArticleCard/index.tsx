import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type ArticleCard = {
  image: ImageSourcePropType;
  text: string;
  favourite?: boolean;
};

const ArticleCard = ({ image, text, favourite }: ArticleCard) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Image
        tintColor={favourite ? colors.secondary : colors.white}
        style={styles.starIcon}
        source={require('../../assets/icons/star.png')}
      />
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

export default ArticleCard;
