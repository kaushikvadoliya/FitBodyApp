import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type ArticleCard = {
  image: ImageSourcePropType;
  description: string;
  favourite?: boolean;
  onStar: () => void;
};

const ArticleCard = ({
  image,
  description,
  favourite,
  onStar,
}: ArticleCard) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <TouchableOpacity style={styles.starIcon} onPress={onStar}>
        <Image
          style={styles.star}
          tintColor={favourite ? colors.secondary : colors.white}
          source={require('../../assets/icons/star.png')}
        />
      </TouchableOpacity>
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {description}
      </Text>
    </View>
  );
};

export default ArticleCard;
