import { SectionList, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParams } from '../../navigation/navigationType';
import FeatureCard from '../../components/FeatureCard';
import { verticalScale } from '../../helper/Scaling';
import RoundItem from '../../components/RoundItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FavoriteContext } from '../../context/FavoriteContext';

const RoundScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const route = useRoute<RouteProp<StackParams, 'Round'>>();
  const { data, feature } = route.params;
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const addFavorite = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: string) => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };

  return (
    <Layout>
      <Header backButton text={feature.physicalLevel} icons search />
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <FeatureCard
            varient="sm"
            backgroundImage={feature.image}
            cornerText={feature.title}
            time={feature.time}
            kcal={feature.kcal}
            excercise={feature.exercises}
            favorite={favorite.includes(feature.id)}
            onFavrotePress={() => addFavorite(feature.id)}
          />
        </View>
        <View style={styles.sectionContainer}>
          <SectionList
            sections={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            bounces={false}
            renderItem={({ item }) => (
              <RoundItem
                repetition={item.repetition}
                time={item.time}
                title={item.title}
                favorite={favorite.includes(item.id)}
                onPress={() => navigation.navigate('Video', { data: item })}
              />
            )}
            renderSectionHeader={({ section: { round } }) => (
              <Text style={styles.roundText}>Round {round}</Text>
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: verticalScale(16) }} />
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: verticalScale(18) }} />
            )}
          />
        </View>
      </View>
    </Layout>
  );
};

export default RoundScreen;
