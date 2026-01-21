import { FlatList, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import Button from '../../components/Button';
import FeatureCard from '../../components/FeatureCard';
import {
  advancedText,
  AdvancedWorkout,
  beginnerText,
  beginnerWorkout,
  intermediateText,
  intermediateWorkout,
} from './data';
import FavoriteCard from '../../components/FavoriteCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import {
  advancedRounds,
  beginnerRounds,
  intermediateRounds,
} from './roundData';
import { FavoriteContext } from '../../context/FavoriteContext';

const WorkoutScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [selectLevel, setSelectLevel] = useState<string>('Beginner');
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const text =
    selectLevel === 'Beginner'
      ? beginnerText
      : selectLevel === 'Intermediate'
      ? intermediateText
      : advancedText;

  const roundData =
    selectLevel === 'Beginner'
      ? beginnerRounds
      : selectLevel === 'Intermediate'
      ? intermediateRounds
      : advancedRounds;

  const workoutData =
    selectLevel === 'Beginner'
      ? beginnerWorkout
      : selectLevel === 'Intermediate'
      ? intermediateWorkout
      : AdvancedWorkout;

  const addFavorite = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter(item => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };
  return (
    <Layout>
      <Header backButton text="Workout" icons search create />
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <Button
            text="Beginner"
            varient="md"
            select={selectLevel}
            onPress={() => setSelectLevel('Beginner')}
          />
          <Button
            text="Intermediate"
            varient="md"
            select={selectLevel}
            onPress={() => setSelectLevel('Intermediate')}
          />
          <Button
            text="Advanced"
            varient="md"
            select={selectLevel}
            onPress={() => setSelectLevel('Advanced')}
          />
        </View>
        <View style={styles.cardContainer}>
          <FeatureCard
            onPress={() =>
              navigation.navigate('Round', {
                feature: workoutData.featureData,
                data: roundData,
              })
            }
            backgroundImage={workoutData.featureData.image}
            varient="lg"
            time={workoutData.featureData.time}
            title={workoutData.featureData.title}
            kcal={workoutData.featureData.kcal}
            cornerText={workoutData.featureData.text}
            favorite={favorite.includes(workoutData.featureData.id)}
            onFavrotePress={() => addFavorite(workoutData.featureData.id)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{text.title}</Text>
          <Text style={styles.subTitle}>{text.subTitle}</Text>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={workoutData.data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.flatlistStyle}
            renderItem={({ item }) => {
              return (
                <FavoriteCard
                  item={item}
                  favorite={favorite.includes(item.id)}
                  onPressFavorite={() => addFavorite(item.id)}
                />
              );
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default WorkoutScreen;
