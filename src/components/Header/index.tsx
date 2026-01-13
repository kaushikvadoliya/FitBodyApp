import { View, Text, Image, StyleProp, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './style';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale } from '../../helper/Scaling';
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
}: HeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.backTextContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          {backButton && (
            <Image
              style={styles.back}
              tintColor={backButtonColorWhite ? colors.white : colors.secondary}
              source={require('../../assets/icons/leftArrow.png')}
            />
          )}
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
      </View>
      {icons && (
        <View style={styles.iconContainer}>
          {search && (
            <TouchableOpacity>
              <Image
                tintColor={colorWhite ? colors.white : colors.purple}
                source={require('../../assets/icons/search.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          )}
          {star && (
            <TouchableOpacity>
              <Image
                tintColor={colors.white}
                source={require('../../assets/icons/star.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Image
              tintColor={colorWhite ? colors.white : colors.purple}
              source={require('../../assets/icons/notifications.png')}
              style={styles.icon}
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
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
