import { View, Text, FlatList } from 'react-native';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { data } from '../HomeScreen/data';
import { nutritionSearchList, SearchItemType, workoutSearchList } from './data';
import FavoriteCard from '../../components/FavoriteCard';
import VideoCard from '../../components/VideoCard';
import { verticalScale } from '../../helper/Scaling';
import SearchItem from '../../components/SearchItem';
import NotFound from '../../components/NotFound';
import { FavoriteContext } from '../../context/FavoriteContext';

const SearchScreen = () => {
  const [selectCategory, setSelectCategory] = useState<string>('All');
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const [search, setSearch] = useState<string>('');
  const [debounce, setDebounce] = useState<string>(search);
  const [focus, setFocus] = useState<boolean>(false);
  const searchListData =
    selectCategory === 'Workout' ? workoutSearchList : nutritionSearchList;
  const [searchList, setSearchList] =
    useState<SearchItemType[]>(searchListData);

  const workoutData = data.filter(item => item.type != 'Article');

  useEffect(() => {
    setSearchList(
      selectCategory === 'Workout' ? workoutSearchList : nutritionSearchList,
    );
  }, [selectCategory]);

  const allData =
    selectCategory === 'All'
      ? data.filter(item => item.type !== 'Article')
      : selectCategory === 'Workout'
      ? data.filter(item => item.type === 'workOut')
      : data.filter(item => item.type === 'Nutrition');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search);
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

  const addFavoriteIds = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: string) => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const addFavoriteWorkout = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: string) => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
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
        )}
        {selectCategory === 'All' || (focus && debounce.length > 0) ? (
          <View style={[styles.flatlistContainer]}>
            <FlatList
              data={filterData}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatlistStyle}
              bounces={false}
              renderItem={({ item }) => {
                return (
                  <FavoriteCard
                    item={item}
                    favorite={favorite.includes(item.id)}
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
