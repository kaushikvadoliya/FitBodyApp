import { View, FlatList, Text, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
const { width } = Dimensions.get('window');

const weights = Array.from({ length: 150 }, (_, i) => i + 20);
export const Item_width = width / 5;

const WeightSlider = () => {
  const [weight, setWeight] = useState<number>(50);
  return (
    <View>
      <Text style={styles.weight}>{weight}</Text>
      <Image
        style={styles.upArrow}
        source={require('../../assets/icons/upArrow.png')}
      />
      <FlatList
        data={weights}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={1}
        snapToInterval={Item_width}
        style={styles.slider}
        contentContainerStyle={{ alignItems: 'center' }}
        decelerationRate="fast"
        keyExtractor={item => item.toString()}
        onScroll={event => {
          const x = event.nativeEvent.contentOffset.x;
          const index = Math.round(x / Item_width) + 2;
          setWeight(weights[index]);
        }}
        getItemLayout={(data, index) => ({
          length: Item_width,
          offset: Item_width * index,
          index,
        })}
        renderItem={({ item }) => {
          return (
            <View style={[{ width: Item_width }, styles.weightContainer]}>
              <Text
                style={
                  item === weight
                    ? styles.selectWeight
                    : styles.unSelectedWeight
                }
              >
                {item}
              </Text>
            </View>
          );
        }}
      />
      <View style={styles.selectLine} />
    </View>
  );
};

export default WeightSlider;
