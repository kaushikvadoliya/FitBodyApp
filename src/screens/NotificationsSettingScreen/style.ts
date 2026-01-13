import { StyleSheet } from 'react-native';
import { verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(20),
    alignItems: 'center',
    paddingTop: verticalScale(50),
  },
});

export default styles;
