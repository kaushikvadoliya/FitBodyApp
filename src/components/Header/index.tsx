import { View, Text, Image, StyleProp, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './style';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
type HeaderProps = {
  backButton?: boolean;
  text?: string;
  colorWhite?: boolean;
  icons?: boolean;
  search?: boolean;
  star?: boolean;
  style?: StyleProp<ViewStyle>;
  backButtonColorWhite?: boolean;
  create?: boolean;
};

const Header = ({
  text,
  colorWhite,
  icons,
  search,
  backButtonColorWhite,
  star,
  backButton,
  style,
  create,
}: HeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.backTextContainer}>
        {backButton && (
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.back}
              resizeMode="contain"
              tintColor={backButtonColorWhite ? colors.white : colors.secondary}
              source={require('../../assets/icons/leftArrow.png')}
            />

            {text && (
              <Text
                style={[
                  styles.text,
                  { color: colorWhite ? colors.white : colors.purple },
                ]}
              >
                {text}
              </Text>
            )}
          </TouchableOpacity>
        )}
        {text && !backButton && (
          <Text
            style={[
              styles.text,
              { color: colorWhite ? colors.white : colors.purple },
            ]}
          >
            {text}
          </Text>
        )}
      </View>
      {icons && (
        <View style={styles.iconContainer}>
          {search && (
            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 1,
                  routes: [{ name: 'Home' }, { name: 'Search' }],
                })
              }
            >
              <Image
                tintColor={colorWhite ? colors.white : colors.purple}
                source={require('../../assets/icons/search.png')}
                style={styles.searchIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          {star && (
            <TouchableOpacity>
              <Image
                tintColor={colors.white}
                source={require('../../assets/icons/star.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          {create && (
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateYourRoutine')}
            >
              <Image
                tintColor={colors.purple}
                source={require('../../assets/icons/plus.png')}
                style={styles.plusIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 1,
                routes: [{ name: 'Home' }, { name: 'Notification' }],
              })
            }
          >
            <Image
              tintColor={colorWhite ? colors.white : colors.purple}
              source={require('../../assets/icons/notifications.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 1,
                routes: [{ name: 'Home' }, { name: 'UserProfile' }],
              })
            }
          >
            <Image
              tintColor={colorWhite ? colors.white : colors.purple}
              source={require('../../assets/icons/user.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
