import { View } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import SwitchItem from '../../components/SwitchItem';

const NotificationsSettingScreen = () => {
  return (
    <Layout>
      <Header backButton text="Notifications Settings" />
      <View style={styles.container}>
        <SwitchItem text="General Notification" />
        <SwitchItem text="Sound" />
        <SwitchItem text="Don't Disturb Mode" />
        <SwitchItem text="vibrate" enabled />
        <SwitchItem text="Lock Screen " enabled />
        <SwitchItem text="Reminders" />
      </View>
    </Layout>
  );
};

export default NotificationsSettingScreen;
