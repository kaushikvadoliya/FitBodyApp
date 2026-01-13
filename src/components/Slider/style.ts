import { Dimensions, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  upArrow: {
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  selectNumber: {
    fontSize: normalize(34),
    fontWeight: '800',
    color: colors.white,
    fontFamily: 'Poppins',
  },
  topText: {
    fontSize: normalize(54),
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: colors.white,
    letterSpacing: 0,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  unitText: {
    fontSize: normalize(20),
    fontWeight: '800',
    color: colors.lightWhite,
    alignSelf: 'flex-end',
    bottom: verticalScale(8),
  },
  text: {
    fontSize: normalize(64),
    marginTop: verticalScale(18),
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.white,
    marginLeft: horizontalScale(20),
  },
  horizontalSlider: {
    height: verticalScale(150),
    width: width * 0.92,
    alignSelf: 'center',
  },
  verticleSlider: {
    width: horizontalScale(220),
    height: verticalScale(352),
    marginTop: verticalScale(30),
  },
  selectTick: {
    borderWidth: horizontalScale(1.6),
    position: 'absolute',
    bottom: verticalScale(150),
    borderColor: colors.secondary,
    height: verticalScale(56),
    backgroundColor: colors.secondary,
    zIndex: 10,
    alignSelf: 'center',
  },
  majorTick: {
    borderWidth: horizontalScale(1.1),
    borderColor: colors.white,
    height: verticalScale(46),
    backgroundColor: colors.white,
  },
  minorTick: {
    borderWidth: horizontalScale(1.1),
    borderColor: colors.white,
    height: verticalScale(24),
    backgroundColor: colors.white,
  },
  verticleMinorTick: {
    borderWidth: horizontalScale(1.1),
    borderColor: colors.white,
    width: verticalScale(24),
    backgroundColor: colors.white,
  },
  verticleMajorTick: {
    borderWidth: horizontalScale(1.1),
    borderColor: colors.white,
    width: verticalScale(46),
    backgroundColor: colors.white,
  },
  verticleSelectTick: {
    borderWidth: horizontalScale(1.6),
    borderColor: colors.secondary,
    width: verticalScale(56),
    backgroundColor: colors.secondary,
    zIndex: 10,
    left: horizontalScale(116),
    bottom: verticalScale(183),
  },
  leftArrow: {
    zIndex: 10,
    bottom: verticalScale(183),
    position: 'absolute',
    left: horizontalScale(202),
  },
  unit: {},
  horizontalPlate: {
    height: verticalScale(90),
    backgroundColor: colors.primary,
    width: '100%',
    zIndex: -1,
    top: verticalScale(52),
    position: 'absolute',
  },
  verticlePlate: {
    backgroundColor: colors.primary,
    zIndex: -1,
    height: verticalScale(370),
    width: horizontalScale(88),
    position: 'absolute',
    left: horizontalScale(100),
    bottom: verticalScale(8),
    borderRadius: 10,
  },
});

export default styles;
