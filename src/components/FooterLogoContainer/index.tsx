import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';

const FooterLogoContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>or sign up with</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/facebook.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterLogoContainer;
