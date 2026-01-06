import { ScrollView, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './style';

type PaginationProp = {
  page: number;
};

const Pagination = ({ page }: PaginationProp) => {
  return (
    <ScrollView
      contentContainerStyle={styles.paginationContainer}
      horizontal
      scrollEnabled={false}
    >
      <View
        style={[
          styles.image,
          { backgroundColor: page === 1 ? colors.white : colors.purple },
        ]}
      />
      <View
        style={[
          styles.image,
          { backgroundColor: page === 2 ? colors.white : colors.purple },
        ]}
      />
      <View
        style={[
          styles.image,
          { backgroundColor: page === 3 ? colors.white : colors.purple },
        ]}
      />
    </ScrollView>
  );
};

export default Pagination;
