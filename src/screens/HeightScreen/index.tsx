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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeightScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const insets = useSafeAreaInsets();

  return (
    <Layout>
      <AuthHeader backText style={styles.header} />
      <View style={[styles.mainContainer, { paddingBottom: insets.bottom }]}>
        <Text style={styles.heading}>What is Your Weight ?</Text>
        <Text style={styles.text}>
          Slide the meter to select your Weight. This helps FitBody calculate
          your metabolic rate and customize a fitness plan that matches your
          life stage.
        </Text>
        <View style={styles.sliderContainer}>
          <Slider verticle arraySize={1000} defaultValue={725} unitText="Cm" />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            transpharent
            onPress={() => navigation.navigate('Goal')}
            text="Continue"
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HeightScreen;
