import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width: horizontalScale(324),
    height: verticalScale(420),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: verticalScale(460),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(18),
  },
  star: {
    height: verticalScale(22),
    width: horizontalScale(22),
    right: horizontalScale(14),
    top: verticalScale(12),
    position: 'absolute',
  },
  playIcon: {
    height: verticalScale(100),
    width: horizontalScale(100),
  },
  detailsContainer: {
    height: verticalScale(128),
    backgroundColor: colors.secondary,
    borderRadius: 24,
    width: verticalScale(324),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    gap: verticalScale(6),
    marginTop: verticalScale(25),
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: normalize(20),
    lineHeight: verticalScale(20),
    fontWeight: '500',
    color: colors.black,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    lineHeight: verticalScale(12),
    fontWeight: '300',
    textAlign: 'center',
    color: colors.black,
    width: horizontalScale(260),
  },
  iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(6),
  },
  icon: {
    height: verticalScale(12),
    width: horizontalScale(10),
  },
  whiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(20),
    backgroundColor: colors.white,
    height: verticalScale(36),
    width: horizontalScale(290),
    borderRadius: 28,
    justifyContent: 'center',
  },
  text: {
    fontWeight: '300',
    fontFamily: 'League Spartan',
    fontSize: normalize(12),
    lineHeight: verticalScale(14),
    color: colors.black1,
  },
});

export default styles;
