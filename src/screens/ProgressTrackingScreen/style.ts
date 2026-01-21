import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  userDetailsContainer: {
    backgroundColor: colors.primary,
    height: verticalScale(125),
    marginTop: verticalScale(4),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  profile: {
    height: verticalScale(108),
    width: horizontalScale(108),
    borderRadius: 84,
  },
  genderIcon: {
    height: verticalScale(16),
    width: horizontalScale(11),
  },
  nameContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins',
    fontSize: normalize(22),
    lineHeight: verticalScale(22),
    fontWeight: '700',
    color: colors.white,
  },
  darkText: {
    fontFamily: 'League Spartan',
    fontSize: normalize(14),
    lineHeight: verticalScale(14),
    color: colors.white,
    fontWeight: '600',
  },
  lightText: {
    fontWeight: '300',
    fontFamily: 'League Spartan',
    fontSize: normalize(14),
    lineHeight: verticalScale(14),
    color: colors.white,
  },
  heightWeightContainer: {
    flexDirection: 'row',
    gap: horizontalScale(7),
    alignItems: 'center',
  },
  lowerContainer: {
    flexDirection: 'row',
    gap: verticalScale(40),
  },
  detailsContainer: {
    justifyContent: 'center',
    height: verticalScale(125),
    gap: verticalScale(14),
    marginLeft: horizontalScale(10),
  },
  rectangleIcon: {
    height: verticalScale(30),
    width: horizontalScale(8),
    backgroundColor: colors.secondary,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(30),
    gap: horizontalScale(20),
  },
  container: {
    marginHorizontal: horizontalScale(20),
  },
});

export default styles;
