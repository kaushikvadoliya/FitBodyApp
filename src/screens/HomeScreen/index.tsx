import React, { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import HomeIcons from '../../components/HomeIcons';
import ArticleCard from '../../components/ArticleCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import { data } from './data';
import VideoCard from '../../components/VideoCard';
import { FavoriteContext } from '../../context/FavoriteContext';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const workoutData = data.filter(item => item.type == 'workOut').slice(0, 2);
  const articleData = data.filter(item => item.type === 'Article').slice(0, 2);

  const addFavoriteWorkout = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: string) => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const addFavoriteArticle = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: string) => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };

  return (
    <Layout>
      <Header icons text="Hi, Madison" search />
      <View style={styles.mainContainer}>
        <View style={styles.upperContainer}>
          <Text style={styles.subTitle}>
            It's time to challenge your limits
          </Text>
          <HomeIcons
            style={styles.icons}
            onWorkOut={() => navigation.navigate('Workout')}
            onProgress={() => navigation.navigate('ProgressTracking')}
          />
          <View style={styles.firstContainer}>
            <Text style={styles.text}>Recommendations</Text>
            <TouchableOpacity style={styles.seeAllContainer}>
              <Text style={styles.seeAllText}>See All</Text>
              <Image
                style={styles.rightArrow}
                source={require('../../assets/icons/rightArrow.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              data={workoutData}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatList}
              bounces={false}
              horizontal
              scrollEnabled={false}
              renderItem={({ item }) => {
                return (
                  <VideoCard
                    playIcon
                    image={item.image}
                    text={item.title ?? ''}
                    time={item.time ?? 12}
                    kcal={item.kcal ?? 120}
                    onStar={() => addFavoriteWorkout(item.id)}
                    favourite={favorite.includes(item.id)}
                  />
                );
              }}
            />
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.heading}>Weekly Challenge</Text>
              <Text style={styles.smallHeading}>Plank With Hip Twist</Text>
            </View>
            <Image
              style={styles.image}
              source={require('../../assets/images/workoutImage3.jpg')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.text}>Articles & Tips</Text>
          <View style={styles.lowerInnerContainer}>
            <FlatList
              data={articleData}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={styles.flatList}
              bounces={false}
              scrollEnabled={false}
              renderItem={({ item }) => {
                return (
                  <ArticleCard
                    image={item.image}
                    description={item.description ?? ''}
                    onStar={() => addFavoriteArticle(item.id)}
                    favourite={favorite.includes(item.id)}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
