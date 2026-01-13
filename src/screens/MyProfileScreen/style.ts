import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    height: horizontalScale(274),
  },
  header: {
    marginTop: verticalScale(25),
  },
  profileImage: {
    borderRadius: 97,
    alignSelf: 'center',
    marginTop: verticalScale(6),
  },
  name: {
    fontSize: normalize(20),
    fontWeight: '700',
    lineHeight: verticalScale(20),
    color: colors.white,
    marginTop: verticalScale(6),
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  birthDate: {
    fontSize: normalize(13),
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  birthText: {
    fontSize: normalize(13),
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: colors.white,
    marginTop: verticalScale(4),
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Poppins',
    fontSize: normalize(13),
    textAlign: 'center',
    fontWeight: '300',
    color: colors.white,
    lineHeight: verticalScale(13),
  },
  infoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: verticalScale(240),
  },
  inputCotainer: {
    marginTop: verticalScale(60),
    alignItems: 'center',
    gap: verticalScale(14),
  },
  button: {
    marginVertical: verticalScale(30),
    alignSelf: 'center',
  },
});

export default styles;
