import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './style';
import { DataType } from '../../screens/HomeScreen/data';
import { colors } from '../../utils/colors';

type FavoriteCardProps = {
  item: DataType;
  favorite?: boolean;
  onPressFavorite?: () => void;
};

const FavoriteCard = ({
  item,
  onPressFavorite,
  favorite,
}: FavoriteCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        {item.type === 'Article' || item.type === 'Nutrition' ? (
          <>
            <Text style={styles.title}>{item.title}</Text>
            {item.description && item.type === 'Article' && (
              <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
                {item.description}
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
            <Text style={styles.title}>{item.title}</Text>
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
      <TouchableOpacity style={styles.starcontainer} onPress={onPressFavorite}>
        <Image
          style={styles.star}
          tintColor={favorite ? colors.secondary : colors.white}
          source={require('../../assets/icons/star.png')}
        />
      </TouchableOpacity>
      {item.video && (
        <TouchableOpacity style={styles.playIcon}>
          <Image
            source={require('../../assets/icons/playVideo.png')}
            resizeMode="contain"
            style={styles.play}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FavoriteCard;
