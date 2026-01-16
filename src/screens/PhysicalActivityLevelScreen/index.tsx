import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import Button from '../../components/Button';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PhysicalActivityLevelScreen = () => {
  const [select, setSelect] = useState<string>('Advance');
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const insets = useSafeAreaInsets();

  return (
    <Layout>
      <AuthHeader backText />
      <View style={[styles.mainContainer, { paddingBottom: insets.bottom }]}>
        <Text style={styles.heading}>Physical Activity Level</Text>
        <Text style={styles.text}>
          Select your current activity level to ensure your fitness plan
          accurately reflects your daily movement and optimizes your results.
        </Text>
        <View style={styles.levelContainer}>
          <Button
            varient="full"
            text="Beginner"
            onPress={() => setSelect('Beginner')}
            select={select}
          />
          <Button
            varient="full"
            text="Intermediate"
            onPress={() => setSelect('Intermediate')}
            select={select}
          />
          <Button
            varient="full"
            text="Advance"
            onPress={() => setSelect('Advance')}
            select={select}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            transpharent
            onPress={() => navigation.navigate('YourProfile')}
            text="Continue"
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default PhysicalActivityLevelScreen;
