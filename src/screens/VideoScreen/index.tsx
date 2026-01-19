import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParams } from '../../navigation/navigationType';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './style';
import { colors } from '../../utils/colors';

const VideoScreen = () => {
  const route = useRoute<RouteProp<StackParams, 'Video'>>();
  const { data } = route.params;
  return (
    <Layout>
      <Header backButton text={data.physicallLevel} icons search />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground borderRadius={20} source={data.image}>
            <View style={styles.container}>
              <Image
                source={require('../../assets/icons/star.png')}
                tintColor={data.favorite ? colors.secondary : colors.white}
                style={styles.star}
              />
              <Image
                style={styles.playIcon}
                source={require('../../assets/icons/playLg.png')}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.whiteContainer}>
            <View style={styles.iconcontainer}>
              <Image
                source={require('../../assets/icons/time.png')}
                tintColor={colors.black}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.text}>{data.timer} Seconds</Text>
            </View>
            <View style={styles.iconcontainer}>
              <Image
                source={require('../../assets/icons/calories.png')}
                tintColor={colors.black}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.text}>{data.repetition} Rep</Text>
            </View>
            <View style={styles.iconcontainer}>
              <Image
                source={require('../../assets/icons/workOut.png')}
                tintColor={colors.black}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.text}>{data.physicallLevel}</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default VideoScreen;
