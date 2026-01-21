import { FlatList, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { data } from '../HomeScreen/data';
import VideoCard from '../../components/VideoCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import Button from '../../components/Button';
import { useToast } from 'react-native-toast-notifications';
import { FavoriteContext } from '../../context/FavoriteContext';

const CreateYourRoutineScreen = () => {
  const routines = data.filter(item => item.type === 'workOut');
  const toast = useToast();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  // const [favorite, setFavorite] = useState<string[]>([]);
  const [select, setSelect] = useState<string[]>([]);
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const selectRoutine = (id: string) => {
    if (select.includes(id)) {
      const array = select.filter(item => item !== id);
      setSelect(array);
    } else {
      setSelect([...select, id]);
    }
  };

  const addFavorite = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: { id: string }) => item.id !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const selectContinue = () => {
    if (select.length === 0) {
      toast.show(<Text>‼️ Plsss Select Routine</Text>, {
        type: 'Danger',
        duration: 2000,
        placement: 'top',
        style: styles.toaststyle,
      });
    } else {
      navigation.navigate('YourRoutine', { ids: select });
    }
  };

  return (
    <Layout>
      <Header backButton text="Create Your Routine" icons search />
      <View style={styles.mainContainer}>
        <View style={styles.flatlistContainer}>
          <FlatList
            numColumns={2}
            data={routines}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlistStyle}
            bounces={false}
            ListFooterComponent={() => (
              <View style={styles.buttonContainer}>
                <Button
                  text="Continue"
                  onPress={() => selectContinue()}
                  select="Continue"
                  varient="lg"
                />
                <Button
                  text="Skip"
                  onPress={() =>
                    navigation.navigate('YourRoutine', { ids: [] })
                  }
                  select=""
                  varient="lg"
                />
              </View>
            )}
            renderItem={({ item }) => {
              return (
                <VideoCard
                  image={item.image}
                  text={item.title ?? ''}
                  time={item.time}
                  select={select.includes(item.id)}
                  repetition={item.repetition}
                  add
                  favourite={favorite.includes(item.id)}
                  lowerContainerHeight={58}
                  onSelect={() => selectRoutine(item.id)}
                  onStar={() => addFavorite(item.id)}
                />
              );
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default CreateYourRoutineScreen;
