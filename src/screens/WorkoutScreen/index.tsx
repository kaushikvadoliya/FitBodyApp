import { View } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import Button from '../../components/Button';

const WorkoutScreen = () => {
  const [selectLevel, setSelectLevel] = useState<string>('Beginner');
  return (
    <Layout>
      <Header backButton text="Workout" icons search />
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <Button
            text="Beginner"
            varient="md"
            select={selectLevel}
            onPress={() => setSelectLevel('Beginner')}
          />
          <Button
            text="Intermediate"
            varient="md"
            select={selectLevel}
            onPress={() => setSelectLevel('Intermediate')}
          />
          <Button
            text="Advanced"
            varient="md"
            select={selectLevel}
            onPress={() => setSelectLevel('Advanced')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default WorkoutScreen;
