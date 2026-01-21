import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './style';
import { colors } from '../../utils/colors';
import Button from '../../components/Button';
import { Calendar } from 'react-native-calendars';

const ProgressTrackingScreen = () => {
  const [selectTab, setSelectTab] = useState<string>('Workout');
  return (
    <Layout>
      <Header backButton text="Progress Tracking" icons search />
      <View style={styles.mainContainer}>
        <View style={styles.userDetailsContainer}>
          <View style={styles.detailsContainer}>
            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>Madison</Text>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/icons/female.png')}
                  tintColor={colors.secondary}
                  style={styles.genderIcon}
                />
              </View>
              <Text style={styles.darkText}>
                Age: <Text style={styles.lightText}>28</Text>
              </Text>
            </View>
            <View style={styles.lowerContainer}>
              <View style={styles.heightWeightContainer}>
                <View style={styles.rectangleIcon} />
                <View>
                  <Text style={styles.darkText}>75 Kg</Text>
                  <Text style={styles.lightText}>Weight</Text>
                </View>
              </View>
              <View style={styles.heightWeightContainer}>
                <View style={styles.rectangleIcon} />
                <View>
                  <Text style={styles.darkText}>165 CM</Text>
                  <Text style={styles.lightText}>Height</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.profile}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              text="Workout"
              select={selectTab}
              onPress={() => setSelectTab('Workout')}
              varient="lg"
            />
            <Button
              text="Charts"
              select={selectTab}
              onPress={() => setSelectTab('Charts')}
              varient="lg"
            />
          </View>
          <Calendar
            style={{
              backgroundColor: colors.white,
            }}
            theme={{
              textSectionTitleColor: '#b6c1cd',
              textDayFontWeight: '500',
              selectedDayBackgroundColor: colors.secondary,
              selectedDayTextColor: '#ffffff',
              todayTextColor: colors.black,
              dayTextColor: colors.purple,
              textDisabledColor: colors.black1,
            }}
            onDayPress={day => {
              console.log('selected day', day);
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default ProgressTrackingScreen;
