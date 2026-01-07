import { version } from 'react';
import { StyleSheet } from 'react-native';
import { verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
  },
  mainContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 26,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: verticalScale(40),
  },
  text: {
    fontFamily: 'League Spartan',
    fontSize: 12,
    fontWeight: '300',
    color: colors.white,
    width: '84%',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: verticalScale(14),
    marginTop: verticalScale(25),
  },
  sliderContainer: {
    marginTop: verticalScale(80),
  },
});

export default styles;
