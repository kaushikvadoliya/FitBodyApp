import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: { marginTop: verticalScale(10) },
  heading: {
    fontSize: normalize(22),
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
    fontSize: normalize(13),
    fontWeight: '500',
  },
  highlightText: {
    color: colors.secondary,
    fontSize: normalize(12),
    fontWeight: '600',
  },
  footerContainer: {
    flex: 1,
    gap: verticalScale(20),
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'center',
    marginTop: verticalScale(24),
  },
});

export default styles;
