import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(158),
    gap: verticalScale(4),
  },
  imageContainer: {
    borderWidth: 1,
    alignItems: 'center',
    height: verticalScale(158),
    width: horizontalScale(158),
    borderRadius: 100,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  image: {
    height: verticalScale(74),
    width: horizontalScale(78),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: normalize(20),
    fontWeight: '800',
    fontFamily: 'Poppins',
  },
});

export default styles;
