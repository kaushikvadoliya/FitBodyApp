import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: horizontalScale(320),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'League Spartan',
    fontSize: normalize(18),
    fontWeight: '500',
    color: colors.white,
    lineHeight: verticalScale(18),
  },
  switch: {
    height: verticalScale(15),
    width: horizontalScale(31),
  },
  thumb: {
    height: verticalScale(12),
    width: horizontalScale(12),
    backgroundColor: colors.white,
    borderRadius: 6,
    margin: 2,
    left: horizontalScale(8),
  },
  track: {
    height: verticalScale(16),
    width: horizontalScale(32),
    borderRadius: 100,
  },
});

export default styles;
