import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  upArrow: {
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  selectWeight: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.white,
    fontFamily: 'Poppins',
  },
  unSelectedWeight: {
    fontSize: 35,
    fontWeight: '700',
    color: colors.black1,
    fontFamily: 'Poppins',
  },
  weight: {
    fontSize: 64,
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.white,
  },
  slider: {
    backgroundColor: colors.primary,
    height: verticalScale(90),
    marginTop: verticalScale(24),
  },
  weightContainer: {
    alignItems: 'center',
  },
  selectLine: {
    borderWidth: 2.5,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    width: horizontalScale(80),
    height: verticalScale(110),
    alignSelf: 'center',
    bottom: verticalScale(100),
  },
  cornerWeights: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.liighblack,
    fontFamily: 'Poppins',
  },
});

export default styles;
