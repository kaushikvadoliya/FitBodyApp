import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  cornerText: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    fontWeight: '500',
    lineHeight: verticalScale(12),
    backgroundColor: colors.secondary,
    alignSelf: 'flex-end',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
    borderRadius: 10,
    left: horizontalScale(4),
  },
  card: {
    width: horizontalScale(330),
    resizeMode: 'contain',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderRadius: 20,
  },
  smStar: {
    resizeMode: 'contain',
    height: verticalScale(18),
    width: horizontalScale(18),
  },
  star: {
    resizeMode: 'contain',
    height: verticalScale(22),
    width: horizontalScale(22),
  },
  icon: {
    height: verticalScale(8),
    width: horizontalScale(7),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: normalize(14),
    lineHeight: verticalScale(14),
    fontWeight: '500',
    color: colors.secondary,
  },
  bottomContainer: {
    height: verticalScale(40),
    width: horizontalScale(330),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(14),
    alignItems: 'center',
    backgroundColor: 'rgba(28, 28, 28, 0.85)',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  bottomLowerContainer: {
    flexDirection: 'row',
    gap: horizontalScale(12),
  },
  text: {
    color: colors.white,
    fontFamily: 'League Spartan',
    fontSize: normalize(12),
    lineHeight: verticalScale(12),
    fontWeight: '300',
  },
  bottomTextContainer: {
    gap: verticalScale(2),
  },
});

export default styles;
