import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

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
  image: {
    borderRadius: 100,
  },
  profileContainer: {
    backgroundColor: colors.primary,
    height: verticalScale(136),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  pencilIcon: {
    position: 'absolute',
    left: horizontalScale(26),
    bottom: verticalScale(3),
  },
  inputContainer: {
    alignItems: 'center',
    gap: verticalScale(16),
    marginTop: verticalScale(20),
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
