import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { data } from '../HomeScreen/data';
import {
  nutritionSearchList,
  searchData,
  SearchItemType,
  workoutSearchList,
} from './data';
import FavoriteCard from '../../components/FavoriteCard';
import VideoCard from '../../components/VideoCard';
import { verticalScale } from '../../helper/Scaling';
import SearchItem from '../../components/SearchItem';
import NotFound from '../../components/NotFound';

const SearchScreen = () => {
  const [selectCategory, setSelectCategory] = useState<string>('All');
  const searchListData =
    selectCategory === 'Workout' ? workoutSearchList : nutritionSearchList;
  const [favoriteWorkouts, setFavoriteWorkouts] = useState<number[]>([]);
  const [search, setSearch] = useState<string>('');
  const [favoriteItems, setFavoriteItems] = useState<number[]>([2, 5, 7]);
  const [debounce, setDebounce] = useState<string>(search);
  const [focus, setFocus] = useState<boolean>(false);
  const [searchList, setSearchList] =
    useState<SearchItemType[]>(searchListData);

  const workoutData = data.filter(item => item.type != 'Article');

  const allData =
    selectCategory === 'All'
      ? searchData
      : selectCategory === 'Workout'
      ? searchData.filter(item => item.type === 'workOut')
      : searchData.filter(item => item.type !== 'workOut');

  useEffect(() => {
    const timer = setTimeout(() => {
      {
        debounce.length > 0 &&
          selectCategory !== 'All' &&
          setSearchList([
            ...searchList,
            { id: searchList.length + 1, text: debounce },
          ]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const addFavoriteIds = (id: number) => {
    if (favoriteItems.includes(id)) {
      const array = favoriteItems.filter(item => item !== id);
      setFavoriteItems(array);
    } else {
      setFavoriteItems([...favoriteItems, id]);
    }
  };

  const addFavoriteWorkout = (id: number) => {
    if (favoriteWorkouts.includes(id)) {
      const array = favoriteWorkouts.filter(item => item !== id);
      setFavoriteWorkouts(array);
    } else {
      setFavoriteWorkouts([...favoriteWorkouts, id]);
    }
  };

  const filterData = useMemo(() => {
    return allData.filter(item =>
      item.title?.toLowerCase().includes(debounce.toLowerCase()),
    );
  }, [debounce, allData]);

  return (
    <Layout>
      <Header backButton text="Search" icons />
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            varient="sm"
            value={search}
            onChangeText={setSearch}
            onFocus={() => setFocus(true)}
          />
          <View style={styles.buttonContainer}>
            <Button
              text="All"
              onPress={() => setSelectCategory('All')}
              select={selectCategory}
              varient="md"
            />
            <Button
              text="Workout"
              onPress={() => setSelectCategory('Workout')}
              select={selectCategory}
              varient="md"
            />
            <Button
              text="Nutrition"
              onPress={() => setSelectCategory('Nutrition')}
              select={selectCategory}
              varient="md"
            />
          </View>
        </View>
        {selectCategory === 'All' && (
          <View style={styles.cardContainer}>
            <FlatList
              data={workoutData}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.flatList}
              bounces={false}
              horizontal
              renderItem={({ item }) => {
                return (
                  <VideoCard
                    image={item.image}
                    text={item.title ?? ''}
                    time={item.time ?? 12}
                    kcal={item.kcal ?? 120}
                    onStar={() => addFavoriteWorkout(item.id)}
                    favourite={favoriteWorkouts.includes(item.id)}
                  />
                );
              }}
            />
          </View>
        )}
        {selectCategory === 'All' || (focus && debounce.length > 0) ? (
          <View style={[styles.flatlistContainer]}>
            <FlatList
              data={filterData}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatlistStyle}
              bounces={false}
              renderItem={({ item }) => {
                return (
                  <FavoriteCard
                    item={item}
                    favorite={favoriteItems.includes(item.id)}
                    onPressFavorite={() => addFavoriteIds(item.id)}
                  />
                );
              }}
              ListFooterComponent={() => (
                <View style={{ paddingBottom: verticalScale(0) }} />
              )}
            />
          </View>
        ) : (
          <View style={styles.searchesContainer}>
            <Text style={styles.topSearch}>Top Searches</Text>
            <FlatList
              bounces={false}
              data={searchList}
              contentContainerStyle={styles.searchList}
              keyExtractor={item => item.id?.toString()}
              renderItem={({ item }) => {
                return <SearchItem item={item} />;
              }}
            />
          </View>
        )}
        {filterData.length === 0 && debounce.length > 0 && <NotFound />}
      </View>
    </Layout>
  );
};

export default SearchScreen;
