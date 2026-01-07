import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';

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
    marginTop: verticalScale(36),
  },
  inputContainer: {
    height: verticalScale(372),
    backgroundColor: colors.primary,
    marginTop: verticalScale(30),
    alignItems: 'center',
    gap: verticalScale(16),
    paddingTop: verticalScale(24),
  },
  textContainer: {
    marginTop: verticalScale(26),
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '500',
  },
  highlightText: {
    color: colors.secondary,
    fontSize: 13,
    fontWeight: '400',
  },
  footerContainer: {
    marginTop: verticalScale(18),
    gap: verticalScale(20),
  },
  button: {
    alignSelf: 'center',
    marginTop: verticalScale(24),
  },
});

export default styles;
