import { Animated, View, Text, Dimensions, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './style';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
const { width } = Dimensions.get('window');

type SliderProps = {
  verticle?: boolean;
  defaultValue: number;
  arraySize: number;
  unitText: string;
};

const line_gap = (width * 0.92) / 19;
const spacer_width = (width * 0.92 - line_gap) / 2;

const Slider = ({
  verticle,
  arraySize,
  unitText,
  defaultValue,
}: SliderProps) => {
  const units = Array.from({ length: arraySize }, (_, i) => i + 100);
  const initailOffset = line_gap * defaultValue;
  const [unit, setUnit] = useState<number>(defaultValue + 100);
  const scroll = useRef(new Animated.Value(initailOffset)).current;
  const currentIndex = useRef(defaultValue);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { [verticle ? 'y' : 'x']: scroll } } }],
    {
      useNativeDriver: true,
      listener: (event: any) => {
        const offset = verticle
          ? event.nativeEvent.contentOffset.y
          : event.nativeEvent.contentOffset.x;
        const index = Math.round(offset / line_gap);
        if (units[index] && currentIndex.current !== index) {
          currentIndex.current = index;
          setUnit(units[index]);
        }
      },
    },
  );

  return (
    <View style={verticle ? { width: 234 } : {}}>
      {verticle && (
        <View style={styles.textContainer}>
          <Text style={styles.topText}>{unit / 5}</Text>
          <Text style={styles.unitText}>{unitText}</Text>
        </View>
      )}
      <Animated.FlatList
        data={units}
        bounces={false}
        horizontal={verticle ? false : true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={defaultValue}
        snapToInterval={line_gap}
        style={verticle ? styles.verticleSlider : styles.horizontalSlider}
        contentContainerStyle={verticle ? {} : { alignItems: 'center' }}
        keyExtractor={item => item.toString()}
        onScroll={handleScroll}
        getItemLayout={(data, index) => ({
          length: line_gap,
          offset: line_gap * index,
          index,
        })}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 10) * line_gap,
            index * line_gap,
            (index + 10) * line_gap,
          ];
          const opacity = scroll.interpolate({
            inputRange,
            outputRange: [0.45, 1, 0.45],
          });

          const scale = scroll.interpolate({
            inputRange,
            outputRange: [0.8, 1.2, 0.8],
          });
          const isMajor = item % 5 === 0;
          return (
            <View>
              {isMajor && (
                <Animated.Text
                  style={[
                    styles.selectNumber,
                    {
                      position: 'absolute',
                      width: verticle ? undefined : horizontalScale(100),
                      opacity,
                      marginLeft: verticle ? horizontalScale(10) : undefined,
                      transform: [{ scale }],
                    },
                  ]}
                >
                  {item / 5}
                </Animated.Text>
              )}
              <Animated.View
                style={{
                  alignItems: 'center',
                  marginLeft: verticle ? horizontalScale(70) : undefined,
                  justifyContent: 'center',
                  marginTop: verticle ? undefined : verticalScale(44),
                  width: verticle ? undefined : line_gap,
                  height: verticle ? line_gap : verticalScale(90),
                }}
              >
                {verticle ? (
                  <View
                    style={
                      isMajor
                        ? styles.verticleMajorTick
                        : styles.verticleMinorTick
                    }
                  />
                ) : (
                  <View style={isMajor ? styles.majorTick : styles.minorTick} />
                )}
              </Animated.View>
            </View>
          );
        }}
        ListHeaderComponent={() => (
          <View
            style={
              verticle
                ? { height: verticalScale(169) }
                : { width: spacer_width }
            }
          />
        )}
        ListFooterComponent={() => (
          <View
            style={
              verticle
                ? { height: verticalScale(169) }
                : { width: spacer_width }
            }
          />
        )}
      />
      <View
        style={
          verticle
            ? { width: 234, height: line_gap, justifyContent: 'center' }
            : {
                width: 362,
                alignSelf: 'center',
              }
        }
      >
        <Image
          style={verticle ? styles.leftArrow : styles.upArrow}
          source={
            verticle
              ? require('../../assets/icons/sliderRightArrow.png')
              : require('../../assets/icons/upArrow.png')
          }
        />
        {verticle ? undefined : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>{unit / 5}</Text>
            <Text style={styles.unitText}>{unitText}</Text>
          </View>
        )}
        <View
          style={verticle ? styles.verticleSelectTick : styles.selectTick}
        />
      </View>
      <View style={verticle ? styles.verticlePlate : styles.horizontalPlate} />
    </View>
  );
};

export default Slider;
