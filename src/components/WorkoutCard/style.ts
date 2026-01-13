import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(138),
    width: horizontalScale(158),
  },
  image: {
    height: verticalScale(98),
    width: horizontalScale(158),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    fontWeight: '400',
    lineHeight: verticalScale(12),
    color: colors.secondary,
    marginLeft: horizontalScale(8),
  },
  lowerContainer: {
    height: verticalScale(40),
    width: horizontalScale(158),
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: colors.white,
    gap: verticalScale(5),
    justifyContent: 'center',
  },
  star: {
    position: 'absolute',
    right: horizontalScale(6),
    top: verticalScale(6),
    height: verticalScale(15),
    width: horizontalScale(15),
  },
  icon: {
    height: verticalScale(9),
    width: horizontalScale(9),
  },
  timerText: {
    fontSize: normalize(11),
    fontWeight: '300',
    fontFamily: 'League Spartan',
    color: colors.white,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  timerKcalContainer: {
    flexDirection: 'row',
    gap: horizontalScale(14),
    justifyContent: 'center',
  },
  playIcon: {
    position: 'absolute',
    top: verticalScale(88),
    right: horizontalScale(8),
  },
});

export default styles;
