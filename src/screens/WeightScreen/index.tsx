import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import AuthHeader from '../../components/AuthHeader';
import Layout from '../../components/Layout';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import Slider from '../../components/Slider';

const WeightScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <Layout>
      {/* <AuthHeader backText style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>What is Your Weight ?</Text>
        <Text style={styles.text}>
          Slide the meter to select your Weight. This helps FitBody calculate
          your metabolic rate and customize a fitness plan that matches your
          life stage.
        </Text> */}
      <View>
        <Slider verticle />
      </View>
      {/* <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => navigation.navigate('Weight')}
            text="Continue"
            style={styles.button}
          />
        </View>
      </View> */}
    </Layout>
  );
};

export default WeightScreen;
