import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './style';
import { DataType } from '../../screens/HomeScreen/data';
import { colors } from '../../utils/colors';

type FavoriteCardProps = {
  item: DataType;
  onStar: () => void;
};

const FavoriteCard = ({ item, onStar }: FavoriteCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        {item.type === 'Article' ? (
          <>
            <Text style={styles.title}>{item.title}</Text>
            {item.text && (
              <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
                {item.text}
              </Text>
            )}
            {item.kcal && item.time && (
              <View style={styles.innerTextContainer}>
                <View style={styles.iconTextContaianer}>
                  <Image
                    style={styles.watchIcon}
                    tintColor={colors.black}
                    resizeMode="contain"
                    source={require('../../assets/icons/time.png')}
                  />
                  <Text style={styles.smallText}>{item.time} Minutes</Text>
                </View>
                <View style={styles.iconTextContaianer}>
                  <Image
                    style={styles.kcalIcon}
                    resizeMode="contain"
                    tintColor={colors.black}
                    source={require('../../assets/icons/calories.png')}
                  />
                  <Text style={styles.smallText}>{item.kcal} Kcal</Text>
                </View>
              </View>
            )}
          </>
        ) : (
          <>
            <Text style={styles.title}>{item.text}</Text>
            <View style={styles.lowerTextContainer}>
              <View style={styles.innerTextContainer}>
                <View style={styles.iconTextContaianer}>
                  <Image
                    style={styles.watchIcon}
                    tintColor={colors.black}
                    resizeMode="contain"
                    source={require('../../assets/icons/time.png')}
                  />
                  <Text style={styles.smallText}>{item.time} Minutes</Text>
                </View>
                <View style={styles.iconTextContaianer}>
                  <Image
                    style={styles.kcalIcon}
                    resizeMode="contain"
                    tintColor={colors.black}
                    source={require('../../assets/icons/calories.png')}
                  />
                  <Text style={styles.smallText}>{item.kcal} Kcal</Text>
                </View>
              </View>
              <View style={styles.exerciseContaianer}>
                <Image
                  style={styles.workoutIcon}
                  resizeMode="contain"
                  tintColor={colors.black}
                  source={require('../../assets/icons/workOut.png')}
                />
                <Text style={styles.smallText}>{item.exercises} Exercises</Text>
              </View>
            </View>
          </>
        )}
      </View>
      <Image style={styles.image} source={item.image} resizeMode="cover" />
      <TouchableOpacity style={styles.starcontainer} onPress={onStar}>
        <Image
          style={styles.star}
          tintColor={colors.secondary}
          source={require('../../assets/icons/star.png')}
        />
      </TouchableOpacity>
      {item.type === 'Video' && (
        <TouchableOpacity style={styles.playIcon}>
          <Image source={require('../../assets/icons/playVideo.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FavoriteCard;
