import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { Image } from 'react-native';
import UserInfoTab from '../../components/UserInfoTab';
import SettingItem from '../../components/SettingItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const UserProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

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
        <View style={styles.infoContainer}>
          <UserInfoTab height={165} weight="75 Kg" year={28} />
        </View>
        <View style={styles.settingItemContainer}>
          <SettingItem
            text="Profile"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/user.png')}
            onPress={() => navigation.navigate('MyProfile')}
          />
          <SettingItem
            text="Favorite"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/star.png')}
            onPress={() => navigation.navigate('Favorites')}
          />
          <SettingItem
            text="Privacy Policy"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/lock.png')}
          />
          <SettingItem
            text="Setting"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/setting.png')}
            onPress={() => navigation.navigate('Setting')}
          />
          <SettingItem
            text="Help"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/support.png')}
          />
          <SettingItem
            text="Logout"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/logout.png')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default UserProfileScreen;
