import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    fontSize: 17,
    backgroundColor: colors.white,
    width: horizontalScale(300),
    height: verticalScale(42),
    fontFamily: 'League Spartan',
    paddingLeft: horizontalScale(18),
    fontWeight: '400',
  },
  eyeIcon: {
    height: 24,
    width: 24,
    left: horizontalScale(10),
  },
  eyeInputContainer: {
    flexDirection: 'row',
    width: horizontalScale(300),

    backgroundColor: colors.white,
    borderRadius: 15,
    alignItems: 'center',
  },
  withEyeInput: {
    fontSize: 17,
    width: horizontalScale(256),
    height: verticalScale(42),
    paddingLeft: horizontalScale(18),
    fontFamily: 'League Spartan',
    fontWeight: '400',
  },
  container: {
    gap: 8,
    position: 'relative',
  },
  inputHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black1,
    left: 4,
  },
  error: {
    color: 'red',
    fontSize: 13,
    position: 'absolute',
    top: verticalScale(70),
  },
});

export default styles;
