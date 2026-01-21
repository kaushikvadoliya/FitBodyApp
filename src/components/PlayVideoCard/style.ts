import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  starContainer: {
    right: horizontalScale(14),
    top: verticalScale(12),
    position: 'absolute',
  },
  star: {
    height: verticalScale(22),
    width: horizontalScale(22),
  },
  playIcon: {
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  container: {
    width: horizontalScale(324),
    height: verticalScale(420),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(23,23,23,0.3)',
    borderRadius: 20,
  },
  heightContainer: {
    width: horizontalScale(324),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(23,23,23,0.3)',
    borderRadius: 20,
  },
});

export default styles;
