import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(24),
    fontWeight: '500',
    fontFamily: 'League Spartan',
  },
  container: {
    width: horizontalScale(324),
    height: verticalScale(64),
    borderRadius: 38,
  },
  lgText: {
    fontSize: normalize(17),
    fontWeight: '500',
    fontFamily: 'League Spartan',
    lineHeight: verticalScale(20),
  },
  lgContainer: {
    width: horizontalScale(156),
    height: verticalScale(32),
    borderRadius: 38,
  },
  mdText: {
    fontSize: normalize(15),
    fontWeight: '500',
    fontFamily: 'League Spartan',
    lineHeight: verticalScale(20),
  },
  mdContainer: {
    minWidth: horizontalScale(104),
    height: verticalScale(30),
    borderRadius: 38,
    paddingHorizontal: horizontalScale(15),
  },
  smText: {
    fontSize: normalize(12),
    fontWeight: '400',
    fontFamily: 'League Spartan',
    lineHeight: verticalScale(13),
  },
  smContainer: {
    width: horizontalScale(72),
    height: verticalScale(18),
    borderRadius: 24,
  },
});

export default styles;
