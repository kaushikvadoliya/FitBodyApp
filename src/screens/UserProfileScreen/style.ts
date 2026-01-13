import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    height: horizontalScale(288),
  },
  header: {
    marginTop: verticalScale(25),
  },
  profileImage: {
    borderRadius: 97,
    alignSelf: 'center',
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
});

export default styles;
