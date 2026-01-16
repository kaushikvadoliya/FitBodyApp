import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  iocnContainer: {
    width: horizontalScale(44),
    height: verticalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 23,
  },
  icon: {
    height: verticalScale(26),
    width: horizontalScale(26),
  },
  container: {
    flexDirection: 'row',
    gap: horizontalScale(20),
    backgroundColor: colors.white,
    borderRadius: 36,
    height: verticalScale(52),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(6),
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: normalize(16),
    fontWeight: '500',
    color: colors.black1,
    lineHeight: verticalScale(16),
  },
});

export default styles;
