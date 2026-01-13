import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import HomeIcons from '../../components/HomeIcons';
import WorkoutCard from '../../components/WorkoutCard';
import ArticleCard from '../../components/ArticleCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

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
          <WorkoutCard
            image={require('../../assets/images/workoutImage1.jpg')}
            text="Squat Excercise"
            time={12}
            kcal={120}
            favourite
          />
          <WorkoutCard
            image={require('../../assets/images/workoutImage2.jpg')}
            text="Full Body Stretching"
            time={15}
            kcal={150}
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
          <ArticleCard
            text="Suplement Guide more text is available"
            favourite
            image={require('../../assets/images/articleImage1.jpg')}
          />
          <ArticleCard
            text="15 Quick & Effective Daily Routines..."
            image={require('../../assets/images/articleImage2.jpg')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
