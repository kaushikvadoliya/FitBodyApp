import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';
import { SearchItemType } from '../../screens/SearchScreen/data';

type SearchItemProps = {
  item: SearchItemType;
};

const SearchItem = ({ item }: SearchItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iocnContainer}>
        <Image
          style={styles.icon}
          tintColor={colors.purple}
          source={require('../../assets/icons/search.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default SearchItem;
