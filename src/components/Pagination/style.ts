import { StyleSheet } from 'react-native';
import { verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 4,
    borderRadius: 12,
  },
  paginationContainer: {
    gap: 4,
    top: verticalScale(24),
  },
});

export default styles;
