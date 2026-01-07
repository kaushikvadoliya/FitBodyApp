import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import Gender from '../../components/Gender';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const GenderScreen = () => {
  const [gender, setGender] = useState<string>('Female');
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <Layout>
      <AuthHeader backText style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>What's Your Gender</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            Select your gender to help us calculate your metabolic rate and
            customize your fitness plan for the most accurate results.
          </Text>
        </View>
        <View style={styles.genderContainer}>
          <Gender
            icon={require('../../assets/icons/male.png')}
            text="Male"
            onPress={() => setGender('Male')}
            select={gender}
          />
          <Gender
            icon={require('../../assets/icons/female.png')}
            text="Female"
            onPress={() => setGender('Female')}
            select={gender}
          />
        </View>
        <PrimaryButton
          text="continue"
          onPress={() => navigation.navigate('Age')}
          style={styles.button}
        />
      </View>
    </Layout>
  );
};

export default GenderScreen;
