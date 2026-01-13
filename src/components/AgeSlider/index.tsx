import { Animated, View, Text, Dimensions, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './style';
const { width } = Dimensions.get('window');

const Ages = Array.from({ length: 50 }, (_, i) => i + 20);
export const Item_width = width / 5;
const spacer_width = (width - Item_width) / 2;

const initailOffset = Item_width * 2;

const AgeSlider = () => {
  const [age, setAge] = useState<number>(Ages[2]);
  const scrollX = useRef(new Animated.Value(initailOffset)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: true,
      listener: (event: any) => {
        const x = event.nativeEvent.contentOffset.x;
        const index = Math.round(x / Item_width);
        if (Ages[index]) setAge(Ages[index]);
      },
    },
  );

  return (
    <View>
      <Text style={styles.age}>{age}</Text>
      <Image
        style={styles.upArrow}
        source={require('../../assets/icons/upArrow.png')}
      />
      <Animated.FlatList
        data={Ages}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={2}
        getItemLayout={(data, index) => ({
          length: Item_width,
          offset: Item_width * index,
          index,
        })}
        snapToInterval={Item_width}
        style={styles.slider}
        contentContainerStyle={{ alignItems: 'center' }}
        decelerationRate="fast"
        keyExtractor={item => item.toString()}
        onScroll={handleScroll}
        windowSize={15}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * Item_width,
            index * Item_width,
            (index + 2) * Item_width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1.2, 0.7],
          });
          return (
            <Animated.View
              style={{
                alignItems: 'center',
                width: Item_width,
                opacity,
                transform: [{ scale }],
              }}
            >
              <Text
                style={item === age ? styles.selectAge : styles.unSelectedAge}
              >
                {item}
              </Text>
            </Animated.View>
          );
        }}
        ListHeaderComponent={() => <View style={{ width: spacer_width }} />}
        ListFooterComponent={() => <View style={{ width: spacer_width }} />}
      />
      <View style={styles.selectLine} />
    </View>
  );
};

export default AgeSlider;
