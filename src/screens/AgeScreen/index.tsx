import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import AgeSlider from '../../components/AgeSlider';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const AgeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <Layout>
      <AuthHeader backText style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>How Old Are You ?</Text>
        <Text style={styles.text}>
          Slide the meter to select your age. This helps FitBody calculate your
          metabolic rate and customize a fitness plan that matches your life
          stage.
        </Text>
        <View style={styles.sliderContainer}>
          <AgeSlider />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            transpharent
            onPress={() => navigation.navigate('Weight')}
            text="Continue"
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default AgeScreen;
