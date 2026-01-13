import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { Image } from 'react-native';

const UserProfileScreen = () => {
  return (
    <Layout>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header
            backButton
            text="My Profile"
            colorWhite
            style={styles.header}
          />
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.jpg')}
          />
          <Text style={styles.name}>Madison Smith</Text>
          <Text style={styles.email}>madisons@example.com</Text>
          <Text style={styles.birthText}>
            Birthday: <Text style={styles.birthDate}>April 1st</Text>
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default UserProfileScreen;
