import { Text, Image, View } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import styles from './style';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SetUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const insets = useSafeAreaInsets();
  return (
    <Layout fullScreen>
      <View style={[styles.mainContainer, { paddingBottom: insets.bottom }]}>
        <Image
          style={styles.image}
          source={require('../../assets/images/setupScreenImage.jpg')}
        />
        <Text
          style={styles.heading}
          numberOfLines={3}
          adjustsFontSizeToFit={true}
        >
          Consistency Is The Key To Progress. Don't Give Up!
        </Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            Welcome to FitBody! Let’s personalize your fitness journey. We just
            need a few details to calculate your perfect daily goals.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            transpharent
            onPress={() => navigation.navigate('Gender')}
            text="Continue"
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default SetUpScreen;
