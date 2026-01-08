import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: horizontalScale(28),
    fontSize: normalize(14),
    fontWeight: '300',
    lineHeight: 14,
  },
  heading: {
    fontSize: normalize(22),
    marginTop: verticalScale(100),
    fontWeight: '800',
    color: colors.white,
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    gap: verticalScale(44),
  },
  inputContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    height: verticalScale(136),
    paddingTop: verticalScale(26),
  },
  button: {
    alignSelf: 'center',
  },
});

export default styles;
