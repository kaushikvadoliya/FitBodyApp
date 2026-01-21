import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParams } from '../../navigation/navigationType';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './style';
import { colors } from '../../utils/colors';
import PlayVideoCard from '../../components/PlayVideoCard';
import { FavoriteContext } from '../../context/FavoriteContext';

const VideoScreen = () => {
  const route = useRoute<RouteProp<StackParams, 'Video'>>();
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const addFavotite = (id: string) => {
    if (favorite.includes(id)) {
      const array = favorite.filter((item: string) => item !== id);
      setFavorite(array);
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const { data } = route.params;
  return (
    <Layout>
      <Header backButton text={data.physicalLevel} icons search />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <PlayVideoCard
            star
            image={data.image}
            favorite={favorite.includes(data.id)}
            onFavoritePress={() => addFavotite(data.id)}
          />
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
              <Text style={styles.text}>{data.time} Seconds</Text>
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
              <Text style={styles.text}>{data.physicalLevel}</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default VideoScreen;
