import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(5),
    marginTop: verticalScale(8),
  },
});

export default styles;
