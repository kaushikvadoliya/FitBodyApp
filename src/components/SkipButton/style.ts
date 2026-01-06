import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    left: horizontalScale(298),
    top: verticalScale(65),
    alignItems: 'center',
    gap: 12,
  },
  text: {
    color: colors.secondary,
    fontFamily: 'League Spartan',
    fontWeight: '500',
    fontSize: 18,
  },
  icon: {
    height: 13,
    width: 7,
  },
});

export default styles;
