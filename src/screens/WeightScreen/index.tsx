import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import AuthHeader from '../../components/AuthHeader';
import Layout from '../../components/Layout';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import Slider from '../../components/Slider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WeightScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [unit, setUnit] = useState<string>('kg');
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
        <View style={styles.unitContainer}>
          <View style={styles.unitTextContainer}>
            <Text onPress={() => setUnit('kg')} style={styles.unitText}>
              KG
            </Text>
          </View>
          <View style={styles.devider} />
          <View style={styles.unitTextContainer}>
            <Text onPress={() => setUnit('Lb')} style={styles.unitText}>
              LB
            </Text>
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <Slider arraySize={700} defaultValue={275} unitText={unit} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            transpharent
            onPress={() => navigation.navigate('Height')}
            text="Continue"
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default WeightScreen;
