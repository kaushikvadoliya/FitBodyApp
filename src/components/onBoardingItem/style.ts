import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageBackground: {
    height: height,
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  centerContainer: {
    height: 170,
    backgroundColor: colors.primary,
    top: verticalScale(300),
    alignItems: 'center',
  },
  button: {
    top: verticalScale(316),
    alignSelf: 'center',
  },
  icon: {
    height: 64,
    width: 44,
    top: 8,
  },
  text: {
    color: colors.white,
    width: 280,
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    top: 10,
  },
});

export default styles;
