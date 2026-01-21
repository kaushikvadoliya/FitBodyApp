import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { FlatList, SectionList, Text, View } from 'react-native';
import styles from './style';
import VideoCard from '../../components/VideoCard';
import { verticalScale } from '../../helper/Scaling';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParams } from '../../navigation/navigationType';
import { data, defaultRoutine } from '../HomeScreen/data';
import { navigationRef } from '../../navigation/MainStack';
import { FavoriteContext } from '../../context/FavoriteContext';

const YourRoutineScreen = () => {
  const route = useRoute<RouteProp<StackParams, 'YourRoutine'>>();
  const [routine, setRoutine] = useState(defaultRoutine);
  const { ids } = route.params;
  const { favorite } = useContext(FavoriteContext);

  const selectData = data.filter(item => ids.includes(item.id));

  const addData = {
    round: defaultRoutine.length + 1,
    data: [{ list: selectData }],
  };

  useEffect(() => {
    if (ids.length > 0) {
      setRoutine([...routine, addData]);
    }
  }, []);

  return (
    <Layout>
      <Header backButton text="Your Routine" icons search />
      <View style={styles.mainContainer}>
        <SectionList
          sections={routine}
          style={styles.sectionListContainer}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          bounces={false}
          renderItem={({ item }) => (
            <FlatList
              data={item.list}
              numColumns={2}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View style={{ height: verticalScale(20) }} />
              )}
              renderItem={({ item }) => {
                return (
                  <VideoCard
                    image={item.image}
                    time={item.time}
                    repetition={item.repetition}
                    text={item.title ?? ''}
                    playIcon
                    favourite={favorite.includes(item.id)}
                    lowerContainerHeight={58}
                    onPlay={() =>
                      navigationRef.navigate('Video', { data: item })
                    }
                  />
                );
              }}
            />
          )}
          renderSectionHeader={({ section: { round } }) => (
            <Text style={styles.roundText}>Round {round}</Text>
          )}
          SectionSeparatorComponent={() => (
            <View style={{ height: verticalScale(18) }} />
          )}
        />
      </View>
    </Layout>
  );
};

export default YourRoutineScreen;
