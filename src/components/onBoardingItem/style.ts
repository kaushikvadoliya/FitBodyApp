import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageBackground: {
    height: height,
    width: width,
  },
  skipButtonStyle: {
    left: horizontalScale(298),
    top: verticalScale(65),
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  centerContainer: {
    height: 170,
    backgroundColor: colors.primary,
    marginTop: verticalScale(300),
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
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
