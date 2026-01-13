import { View, Text, Image, StyleProp, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './style';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
type HeaderProps = {
  backButton?: boolean;
  text?: string;
  colorWhite?: boolean;
  icons?: boolean;
  search?: boolean;
  star?: boolean;
  style?: StyleProp<ViewStyle>;
  onSearch?: () => void;
  onStar?: () => void;
  onProfile?: () => void;
  onNotifications?: () => void;
  backButtonColorWhite?: boolean;
};

const Header = ({
  text,
  colorWhite,
  icons,
  search,
  backButtonColorWhite,
  onSearch,
  onStar,
  star,
  onProfile,
  onNotifications,
  backButton,
  style,
}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.backTextContainer}>
        {backButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.back}
              tintColor={backButtonColorWhite ? colors.white : colors.secondary}
              source={require('../../assets/icons/leftArrow.png')}
            />
          </TouchableOpacity>
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
      </View>
      {icons && (
        <View style={styles.iconContainer}>
          {search && (
            <TouchableOpacity onPress={onSearch}>
              <Image
                tintColor={colorWhite ? colors.white : colors.purple}
                source={require('../../assets/icons/search.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          )}
          {star && (
            <TouchableOpacity onPress={onStar}>
              <Image
                tintColor={colors.white}
                source={require('../../assets/icons/star.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onNotifications}>
            <Image
              tintColor={colorWhite ? colors.white : colors.purple}
              source={require('../../assets/icons/notifications.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onProfile}>
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
