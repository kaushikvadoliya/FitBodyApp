import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import styles from './style';

type UserInfoTabProps = {
  height: number;
  weight: string;
  year: number;
};

const UserInfoTab = ({ height, weight, year }: UserInfoTabProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.heightWeightContainer}>
        <Text style={styles.value}>{weight}</Text>
        <Text style={styles.text}>Weight</Text>
      </View>
      <View style={styles.seprator} />
      <View style={styles.yearContainer}>
        <Text style={styles.value}>{year}</Text>
        <Text style={styles.text}>Years Old</Text>
      </View>
      <View style={styles.seprator} />
      <View style={styles.heightWeightContainer}>
        <Text style={styles.value}>{year} CM</Text>
        <Text style={styles.text}>Height</Text>
      </View>
    </View>
  );
};

export default UserInfoTab;
