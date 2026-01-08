import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
  },
  mainContainer: {
    flex: 1,
    gap: verticalScale(44),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: horizontalScale(28),
    fontSize: normalize(14),
    fontWeight: '300',
    lineHeight: 14,
    marginTop: verticalScale(94),
  },
  inputContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    height: verticalScale(212),
    paddingTop: verticalScale(26),
    gap: verticalScale(18),
  },
  button: {
    alignSelf: 'center',
  },
});

export default styles;
