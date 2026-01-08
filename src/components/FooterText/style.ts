import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'League Spartan',
    fontSize: normalize(14),
  },
  buttonText: {
    color: colors.secondary,
  },
});

export default styles;
