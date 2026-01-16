import { SectionList, Text, View } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Button from '../../components/Button';
import styles from './style';
import { remindersNotification, systemNotification } from './data';
import NotificationItem from '../../components/NotificationItem';
import { verticalScale } from '../../helper/Scaling';

const NotificationScreen = () => {
  const [activeTab, setActiveTab] = useState<string>('Reminders');

  const notificationData =
    activeTab === 'Reminders' ? remindersNotification : systemNotification;

  return (
    <Layout>
      <Header backButton text="Notifications" icons search />
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <Button
            varient="lg"
            text="Reminders"
            select={activeTab}
            onPress={() => setActiveTab('Reminders')}
          />
          <Button
            varient="lg"
            text="System"
            select={activeTab}
            onPress={() => setActiveTab('System')}
          />
        </View>
        <View>
          <SectionList
            sections={notificationData}
            keyExtractor={item => item.id}
            style={styles.sectionlist}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            bounces={false}
            renderItem={({ item }) => <NotificationItem item={item} />}
            ListFooterComponent={() => (
              <View style={{ height: verticalScale(10) }} />
            )}
            renderSectionHeader={({ section: { day } }) => (
              <Text style={styles.sectoinTitle}>{day}</Text>
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: verticalScale(16) }} />
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: verticalScale(18) }} />
            )}
            ListFooterComponentStyle={{ height: verticalScale(50) }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default NotificationScreen;
