import { SectionList, Text, View } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParams } from '../../navigation/navigationType';
import FeatureCard from '../../components/FeatureCard';
import { verticalScale } from '../../helper/Scaling';
import RoundItem from '../../components/RoundItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const RoundScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const route = useRoute<RouteProp<StackParams, 'Round'>>();
  const { data, feature } = route.params;

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
          />
        </View>
        <View style={styles.sectionContainer}>
          <SectionList
            sections={data}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            bounces={false}
            renderItem={({ item }) => (
              <RoundItem
                repetition={item.repetition}
                time={item.timer}
                title={item.title}
                favorite={item.favorite}
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
