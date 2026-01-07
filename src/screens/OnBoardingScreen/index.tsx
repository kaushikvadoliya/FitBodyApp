import { FlatList } from 'react-native';
import React, { useRef } from 'react';
import { onBoardingData } from './onBoardingData';
import OnBoardingItem from '../../components/onBoardingItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const OnBoardingScreen = () => {
  const flatlistRef = useRef<FlatList>(null);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const onNext = (index: number) => {
    if (index < 3) {
      flatlistRef.current?.scrollToIndex({ index: index, animated: true });
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <FlatList
      ref={flatlistRef}
      data={onBoardingData}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => (
        <OnBoardingItem item={item} onPress={() => onNext(index + 1)} />
      )}
      horizontal
      scrollEnabled={false}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default OnBoardingScreen;
