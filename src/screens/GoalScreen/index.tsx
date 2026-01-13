import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import Goal from '../../components/Goal';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const GoalScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [select, setSelect] = useState<string>('');
  return (
    <Layout>
      <AuthHeader backText style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>What is Your Goal ?</Text>
        <Text style={styles.text}>
          Choose the target that motivates you most so we can customize your
          training volume, nutrition plan, and daily activity targets.
        </Text>
        <View style={styles.goalContainer}>
          <Goal
            onPress={() => setSelect('Lose Weight')}
            select={select}
            text="Lose Weight"
          />
          <Goal
            onPress={() => setSelect('Gain Weight')}
            select={select}
            text="Gain Weight"
          />
          <Goal
            onPress={() => setSelect('Muscle Mass Gain')}
            select={select}
            text="Muscle Mass Gain"
          />
          <Goal
            onPress={() => setSelect('Shape Body')}
            select={select}
            text="Shape Body"
          />
          <Goal
            onPress={() => setSelect('Others')}
            select={select}
            text="Others"
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            transpharent
            style={styles.button}
            text="Continue"
            onPress={() => navigation.navigate('PhysicalActivityLevel')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default GoalScreen;
