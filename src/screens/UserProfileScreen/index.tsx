import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import Header from '../../components/Header';
import styles from './style';
import { Image } from 'react-native';
import UserInfoTab from '../../components/UserInfoTab';
import SettingItem from '../../components/SettingItem';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import SimpleBottomSheet from '../../components/BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { navigationRef } from '../../navigation/MainStack';
import Layout from '../../components/Layout';

const UserProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const logout = () => {
    bottomSheetModalRef.current?.close();

    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack', params: { screen: 'Login' } }],
      }),
    );
  };

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
            resizeMode="contain"
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
            onPress={() => navigation.navigate('Help')}
          />
          <SettingItem
            text="Logout"
            buttonIcon={require('../../assets/icons/rightArrow.png')}
            icon={require('../../assets/icons/logout.png')}
            onPress={openBottomSheet}
          />
        </View>
        <SimpleBottomSheet
          onLogout={logout}
          height={220}
          ref={bottomSheetModalRef}
          onClose={() => bottomSheetModalRef.current?.close()}
        />
      </View>
    </Layout>
  );
};

export default UserProfileScreen;
