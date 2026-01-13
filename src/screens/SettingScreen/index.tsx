import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import SettingItem from '../../components/SettingItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const SettingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <Layout>
      <Header backButton text="Settings" />
      <View style={styles.container}>
        <SettingItem
          text="Notification Setting"
          buttonIcon={require('../../assets/icons/downArrow.png')}
          icon={require('../../assets/icons/notifications.png')}
          onPress={() => navigation.navigate('NotificationsSetting')}
        />
        <SettingItem
          text="Password Setting"
          buttonIcon={require('../../assets/icons/downArrow.png')}
          icon={require('../../assets/icons/key.png')}
        />
        <SettingItem
          text="Delete Account"
          buttonIcon={require('../../assets/icons/downArrow.png')}
          icon={require('../../assets/icons/user.png')}
        />
      </View>
    </Layout>
  );
};

export default SettingScreen;
