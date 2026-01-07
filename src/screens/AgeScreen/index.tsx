import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import WeightSlider from '../../components/WeightSlider';

const AgeScreen = () => {
  return (
    <Layout>
      <AuthHeader backText style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>What is Your Weight?</Text>
        <Text style={styles.text}>
          Slide the meter to select your current weight. Precise tracking helps
          the FitBody app customize your daily fitness plan and reach your
          goals.
        </Text>
        <View style={styles.sliderContainer}>
          <WeightSlider />
        </View>
      </View>
    </Layout>
  );
};

export default AgeScreen;
