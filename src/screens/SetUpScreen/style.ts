import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  image: {
    height: verticalScale(444),
    width: '100%',
  },
  heading: {
    fontSize: normalize(30),
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: colors.secondary,
    width: '67%',
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: verticalScale(36),
    marginVertical: verticalScale(22),
  },
  container: {
    height: verticalScale(110),
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(14),
    textAlign: 'center',
    width: horizontalScale(310),
    alignSelf: 'center',
    fontWeight: '300',
  },
  button: {
    alignSelf: 'center',
    marginBottom: verticalScale(30),
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default styles;
