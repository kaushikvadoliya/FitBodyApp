import { Image, ImageBackground, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
  });
  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={require('../../assets/images/welcome_bg.jpg')}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image
          source={require('../../assets/icons/appIcon.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.fitText}>
          FIT<Text style={styles.bodyText}>BODY</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
