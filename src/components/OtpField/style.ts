import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  container: {
    gap: 8,
    position: 'relative',
  },
  inputHeaderText: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: colors.black1,
    left: 4,
  },
  error: {
    color: 'red',
    fontSize: normalize(13),
    position: 'absolute',
    top: verticalScale(84),
  },
});

export default styles;
