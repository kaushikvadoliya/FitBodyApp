import { StyleSheet } from 'react-native';
import { verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
  },
  mainContainer: {
    flex: 1,
  },
  heading: {
    fontSize: normalize(26),
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: verticalScale(40),
  },
  text: {
    fontFamily: 'League Spartan',
    fontSize: normalize(12),
    fontWeight: '300',
    color: colors.white,
    width: '84%',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: verticalScale(14),
    marginTop: verticalScale(25),
  },
  sliderContainer: {
    marginTop: verticalScale(86),
  },
  button: {
    alignSelf: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default styles;
