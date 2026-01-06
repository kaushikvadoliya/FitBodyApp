import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { OnBoardingDataType } from '../../screens/OnBoardingScreen/onBoardingData';
import styles from './style';
import Pagination from '../Pagination';
import SkipButton from '../SkipButton';
import PrimaryButton from '../PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

type OnBoardingItemProps = {
  item: OnBoardingDataType;
  onPress: () => void;
};

const OnBoardingItem = ({ item, onPress }: OnBoardingItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <ImageBackground
      style={styles.imageBackground}
      resizeMode="cover"
      source={item.image}
    >
      <View style={styles.container}>
        {item.id !== 3 && (
          <SkipButton onPress={() => navigation.navigate('Login')} />
        )}
        <View style={styles.centerContainer}>
          <Image style={styles.icon} source={item.icon} resizeMode="contain" />
          <Text style={styles.text}>{item.description}</Text>
          <Pagination page={item.id} />
        </View>
        <PrimaryButton
          style={styles.button}
          text={item.buttonText}
          onPress={onPress}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoardingItem;
