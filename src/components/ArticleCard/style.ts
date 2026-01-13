import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(157),
    height: verticalScale(134),
    borderRadius: 20,
  },
  starIcon: {
    position: 'absolute',
    top: verticalScale(8),
    right: horizontalScale(8),
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: normalize(12),
    color: colors.white,
  },
  container: {
    width: horizontalScale(157),
    gap: verticalScale(5),
  },
});

export default styles;
