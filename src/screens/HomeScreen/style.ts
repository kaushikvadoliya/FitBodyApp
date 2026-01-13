import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'League Spartan',
    fontSize: normalize(13),
    lineHeight: verticalScale(13),
    fontWeight: '500',
    color: colors.white,
  },
  upperContainer: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(2),
  },
  icons: {
    marginTop: verticalScale(10),
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(6),
  },
  text: {
    fontSize: normalize(15),
    fontWeight: '500',
    color: colors.secondary,
    lineHeight: verticalScale(15),
  },
  cardContainer: {
    marginTop: verticalScale(8),
    flexDirection: 'row',
    gap: horizontalScale(10),
    justifyContent: 'center',
  },
  seeAllText: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    fontWeight: '500',
    color: colors.white,
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
  },
  rightArrow: {
    width: horizontalScale(6),
    height: verticalScale(11),
  },
  middleContainer: {
    height: verticalScale(171),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(16),
  },
  innerContainer: {
    flexDirection: 'row',
    height: verticalScale(125),
    width: horizontalScale(324),
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  image: {
    height: verticalScale(125),
    width: horizontalScale(157),
    borderRadius: 20,
  },
  heading: {
    fontSize: normalize(24),
    fontWeight: '500',
    lineHeight: verticalScale(25),
    color: colors.secondary,
    textAlign: 'center',
  },
  smallHeading: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    color: colors.white,
    fontWeight: '400',
  },
  textContainer: {
    width: horizontalScale(163),
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(10),
  },
  lowerContainer: {
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(20),
  },
  lowerInnerContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
});

export default styles;
