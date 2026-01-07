import {
  View,
  ImageSourcePropType,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type GenderProp = {
  icon: ImageSourcePropType;
  text: string;
  select: string;
  onPress: () => void;
};

const Gender = ({ icon, text, onPress, select }: GenderProp) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.imageContainer,
          {
            borderColor: select === text ? undefined : colors.white,
            backgroundColor:
              select === text ? colors.secondary : colors.liighblack,
          },
        ]}
      >
        <Image
          source={icon}
          style={styles.image}
          tintColor={select === text ? colors.black : colors.white}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Gender;
