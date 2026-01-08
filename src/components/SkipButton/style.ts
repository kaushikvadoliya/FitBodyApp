import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    color: colors.secondary,
    fontFamily: 'League Spartan',
    fontWeight: '500',
    fontSize: normalize(18),
  },
  icon: {
    height: 13,
    width: 7,
  },
});

export default styles;
