import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    gap: horizontalScale(12),
    backgroundColor: colors.white,
    borderRadius: 36,
    height: verticalScale(64),
    width: horizontalScale(330),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  iconContainer: {
    width: horizontalScale(47),
    height: verticalScale(47),
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: verticalScale(30),
    width: verticalScale(30),
  },
  time: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: normalize(12),
    color: colors.primary,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: normalize(13),
    fontWeight: '500',
    color: colors.black1,
    lineHeight: verticalScale(13),
    width: horizontalScale(250),
  },
  dot: {
    position: 'absolute',
    backgroundColor: colors.primary,
    height: verticalScale(13),
    width: horizontalScale(13),
    borderRadius: 6.5,
    top: verticalScale(2),
    left: horizontalScale(0),
  },
});

export default styles;
