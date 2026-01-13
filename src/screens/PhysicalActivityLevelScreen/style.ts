import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';

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
    marginTop: verticalScale(30),
  },
  levelContainer: {
    alignItems: 'center',
    marginTop: verticalScale(100),
    gap: verticalScale(32),
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
