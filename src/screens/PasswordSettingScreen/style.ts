import { StyleSheet } from 'react-native';
import { verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  container: {
    marginTop: verticalScale(50),
    gap: verticalScale(30),
  },
  inputContaier: {
    marginTop: verticalScale(50),
    gap: verticalScale(30),
  },
  forgotText: {
    fontFamily: 'League Spartan',
    fontSize: normalize(15),
    fontWeight: '500',
    lineHeight: verticalScale(15),
    color: colors.white,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: verticalScale(40),
  },
});

export default styles;
