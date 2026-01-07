import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

type AuthHeaderProps = {
  backText?: boolean;
  text?: string;
  style?: StyleProp<ViewStyle>;
};

const AuthHeader = ({ backText, text, style }: AuthHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/icons/leftArrow.png')}
        />
        {backText && <Text style={styles.backText}>Back</Text>}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;
