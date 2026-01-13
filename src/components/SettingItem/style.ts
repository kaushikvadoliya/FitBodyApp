import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'League Spartan',
    fontSize: normalize(18),
    fontWeight: '500',
    color: colors.white,
    lineHeight: verticalScale(18),
  },
  mainContainer: {
    flexDirection: 'row',
    width: horizontalScale(320),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    gap: horizontalScale(20),
    alignItems: 'center',
  },
  iconContainer: {
    height: verticalScale(40),
    width: horizontalScale(40),
    borderRadius: 20,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: horizontalScale(27),
    height: verticalScale(28),
  },
  buttonIcon: {
    height: verticalScale(11),
    width: horizontalScale(11),
  },
});

export default styles;
