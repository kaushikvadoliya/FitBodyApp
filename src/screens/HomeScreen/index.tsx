import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import HomeIcons from '../../components/HomeIcons';
import WorkoutCard from '../../components/WorkoutCard';
import ArticleCard from '../../components/ArticleCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import { data } from './data';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [favoriteWorkouts, setFavoriteWorkouts] = useState<number[]>([]);
  const [favoriteArticles, setFavoriteArticles] = useState<number[]>([]);

  const workoutData = data.filter(item => item.type != 'Article').slice(0, 2);
  const articleData = data.filter(item => item.type !== 'Video').slice(0, 2);

  const addFavoriteWorkout = (id: number) => {
    if (favoriteWorkouts.includes(id)) {
      const array = favoriteWorkouts.filter(item => item !== id);
      setFavoriteWorkouts(array);
    } else {
      setFavoriteWorkouts([...favoriteWorkouts, id]);
    }
  };

  const addFavoriteArticle = (id: number) => {
    if (favoriteArticles.includes(id)) {
      const array = favoriteArticles.filter(item => item !== id);
      setFavoriteArticles(array);
    } else {
      setFavoriteArticles([...favoriteArticles, id]);
    }
  };

  return (
    <Layout>
      <Header
        icons
        text="Hi, Madison"
        search
        onProfile={() => navigation.navigate('UserProfile')}
      />
      <View style={styles.upperContainer}>
        <Text style={styles.subTitle}>It's time to challenge your limits</Text>
        <HomeIcons style={styles.icons} />
        <View style={styles.firstContainer}>
          <Text style={styles.text}>Recommendations</Text>
          <TouchableOpacity style={styles.seeAllContainer}>
            <Text style={styles.seeAllText}>See All</Text>
            <Image
              style={styles.rightArrow}
              source={require('../../assets/icons/rightArrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            data={workoutData}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatList}
            bounces={false}
            horizontal
            scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                <WorkoutCard
                  image={item.image}
                  text={item.text ?? ''}
                  time={item.time ?? 12}
                  kcal={item.kcal ?? 120}
                  onStar={() => addFavoriteWorkout(item.id)}
                  favourite={favoriteWorkouts.includes(item.id)}
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
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.text}>Articles & Tips</Text>
        <View style={styles.lowerInnerContainer}>
          <FlatList
            data={articleData}
            keyExtractor={item => item.id.toString()}
            horizontal
            contentContainerStyle={styles.flatList}
            bounces={false}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                <ArticleCard
                  image={item.image}
                  text={item.text ?? ''}
                  onStar={() => addFavoriteArticle(item.id)}
                  favourite={favoriteArticles.includes(item.id)}
                />
              );
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
