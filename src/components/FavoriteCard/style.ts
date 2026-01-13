import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: horizontalScale(336),
    height: verticalScale(110),
    borderRadius: 20,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  image: {
    width: horizontalScale(148),
    height: verticalScale(110),
    borderRadius: 20,
  },
  textContainer: {
    width: horizontalScale(175),
    alignItems: 'center',
    gap: verticalScale(10),
    justifyContent: 'center',
  },
  text: {
    width: horizontalScale(136),
    textAlign: 'justify',
    fontSize: normalize(13),
    fontWeight: '300',
    lineHeight: verticalScale(14),
    fontFamily: 'League Spartan',
  },
  starcontainer: {
    position: 'absolute',
    right: horizontalScale(8),
    top: verticalScale(8),
  },
  star: {
    height: verticalScale(16),
    width: verticalScale(16),
  },
  title: {
    fontSize: normalize(16),
    lineHeight: verticalScale(18),
    width: horizontalScale(124),
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  exerciseContaianer: {
    flexDirection: 'row',
    gap: horizontalScale(5),
    width: horizontalScale(140),
  },
  kcalIcon: {
    height: verticalScale(9),
    width: horizontalScale(7),
  },
  workoutIcon: {
    height: verticalScale(11),
    width: horizontalScale(9),
  },
  watchIcon: {
    height: verticalScale(9),
    width: horizontalScale(9),
  },
  smallText: {
    fontSize: normalize(12),
    lineHeight: verticalScale(12),
    fontFamily: 'League Spartan',
    fontWeight: '300',
  },
  innerTextContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  iconTextContaianer: {
    flexDirection: 'row',
    gap: horizontalScale(5),
  },
  lowerTextContainer: {
    gap: verticalScale(5),
  },
  playIcon: {
    position: 'absolute',
    top: verticalScale(50),
    right: horizontalScale(62),
  },
});

export default styles;
