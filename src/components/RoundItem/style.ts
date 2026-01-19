import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: horizontalScale(330),
    height: verticalScale(64),
    borderRadius: 36,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    justifyContent: 'space-between',
  },
  playIcon: {
    height: verticalScale(45),
    width: horizontalScale(45),
  },
  repetitionText: {
    color: colors.primary,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: normalize(13),
    lineHeight: verticalScale(13),
    marginRight: horizontalScale(10),
  },
  textContainer: {
    gap: verticalScale(4),
  },
  timeIcon: {
    height: verticalScale(10),
    width: horizontalScale(10),
  },
  timeContainer: {
    flexDirection: 'row',
    gap: horizontalScale(5),
  },
  time: {
    fontWeight: '500',
    fontSize: normalize(12),
    color: colors.primary,
    lineHeight: verticalScale(12),
    fontFamily: 'Poppins',
  },
  title: {
    fontWeight: '500',
    fontSize: normalize(13),
    color: colors.black1,
    lineHeight: verticalScale(12),
    fontFamily: 'Poppins',
  },
  leftContainer: {
    gap: horizontalScale(14),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
