import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  heading: {
    fontSize: normalize(22),
    fontWeight: '800',
    color: colors.white,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    marginTop: verticalScale(70),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: horizontalScale(28),
    marginTop: verticalScale(34),
    fontSize: normalize(14),
    fontWeight: '300',
    lineHeight: verticalScale(14),
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
    fontSize: normalize(13),
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
  header: { marginTop: verticalScale(10) },
});

export default styles;
