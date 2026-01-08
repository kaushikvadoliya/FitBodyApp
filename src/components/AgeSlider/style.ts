import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  upArrow: {
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  selectAge: {
    fontSize: normalize(35),
    fontWeight: '800',
    color: colors.white,
    fontFamily: 'Poppins',
  },
  unSelectedAge: {
    fontSize: normalize(35),
    fontWeight: '800',
    color: colors.black1,
    fontFamily: 'Poppins',
  },
  age: {
    fontSize: normalize(64),
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.white,
  },
  slider: {
    backgroundColor: colors.primary,
    height: verticalScale(94),
    marginTop: verticalScale(28),
  },
  selectLine: {
    borderWidth: 2.5,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    width: horizontalScale(80),
    height: verticalScale(112),
    alignSelf: 'center',
    bottom: verticalScale(102),
  },
});

export default styles;
