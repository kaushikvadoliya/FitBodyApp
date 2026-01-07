import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    marginTop: verticalScale(70),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(34),
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 14,
  },
  button: {
    alignSelf: 'center',
    marginTop: verticalScale(34),
  },
  innerContainer: {
    gap: verticalScale(18),
    paddingTop: verticalScale(26),
  },
  inputContainer: {
    backgroundColor: colors.primary,
    height: verticalScale(230),
    marginTop: verticalScale(60),
    alignItems: 'center',
    gap: verticalScale(16),
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
  forgotButton: {
    width: horizontalScale(326),
  },
  footerContainer: {
    marginTop: verticalScale(30),
    gap: verticalScale(56),
  },
});

export default styles;
