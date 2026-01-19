import React, { useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { FlatList, Text, View } from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import { data, DataType } from '../HomeScreen/data';
import FavoriteCard from '../../components/FavoriteCard';

const FavoritesScreen = () => {
  const [select, setSelect] = useState<string>('All');
  const [favorites, setFavorites] = useState<DataType[]>(data);
  const favoriteData = useMemo(() => {
    if (select === 'All') {
      return favorites;
    }
    return select === 'Video'
      ? favorites.filter(item => item.type === 'workOut')
      : favorites.filter(item => item.type !== 'workOut');
  }, [favorites, select]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <Header backButton text="Favorites" search icons />
      <View style={styles.mainContainer}>
        <View style={styles.sortContainer}>
          <Text style={styles.text}>Sort By</Text>
          <View style={styles.buttonContainer}>
            <Button
              text="All"
              select={select}
              varient="sm"
              onPress={() => setSelect('All')}
            />
            <Button
              text="Video"
              select={select}
              varient="sm"
              onPress={() => setSelect('Video')}
            />
            <Button
              text="Article"
              select={select}
              varient="sm"
              onPress={() => setSelect('Article')}
            />
          </View>
        </View>
        <FlatList
          data={favoriteData}
          style={styles.flatlistContainer}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlistStyle}
          bounces={false}
          renderItem={({ item }) => {
            return (
              <FavoriteCard
                item={item}
                favorite
                onPressFavorite={() => removeFavorite(item.id)}
              />
            );
          }}
        />
      </View>
    </Layout>
  );
};

export default FavoritesScreen;
