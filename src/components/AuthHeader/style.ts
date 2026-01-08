import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  backText: {
    color: colors.secondary,
    fontSize: normalize(15),
    fontWeight: '700',
  },
  text: {
    color: colors.secondary,
    fontSize: normalize(20),
    fontWeight: '800',
    textAlign: 'center',
  },
  backContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    position: 'relative',
    left: horizontalScale(20),
    zIndex: 10,
  },
  icon: {
    height: 13,
    width: 7,
  },
  textContainer: {
    width: '100%',
    position: 'absolute',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
