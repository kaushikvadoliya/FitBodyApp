import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(5),
    marginTop: verticalScale(8),
    marginHorizontal: horizontalScale(20),
  },
  cardContainer: {
    height: verticalScale(240),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(25),
  },
  textContainer: {
    marginHorizontal: horizontalScale(20),
    gap: verticalScale(4),
    marginTop: verticalScale(20),
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: normalize(20),
    lineHeight: verticalScale(20),
    color: colors.secondary,
    fontWeight: '500',
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    lineHeight: verticalScale(12),
    color: colors.white,
    fontWeight: '400',
  },
  flatlistContainer: {
    alignItems: 'center',
    marginTop: verticalScale(25),
    flex: 1,
  },
  flatlistStyle: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(14),
  },
});

export default styles;
