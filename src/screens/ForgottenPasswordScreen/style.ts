import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
  },
  mainContainer: {
    flex: 1,
    gap: verticalScale(34),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: horizontalScale(28),
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 14,
  },
  heading: {
    fontSize: 22,
    marginTop: verticalScale(130),
    fontWeight: '800',
    color: colors.white,
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    height: verticalScale(124),
    paddingTop: verticalScale(26),
  },
  button: {
    alignSelf: 'center',
  },
});

export default styles;
