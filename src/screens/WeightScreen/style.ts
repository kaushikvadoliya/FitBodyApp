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
  sliderContainer: {
    marginTop: verticalScale(46),
  },
  button: {
    alignSelf: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  unitTextContainer: {
    justifyContent: 'center',
    width: horizontalScale(100),
    height: horizontalScale(50),
  },
  unitContainer: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    height: verticalScale(58),
    width: horizontalScale(322),
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  unitText: {
    fontWeight: '700',
    fontSize: normalize(20),
    textAlign: 'center',
  },
  devider: {
    height: verticalScale(40),
    backgroundColor: colors.black,
    borderWidth: 1.5,
  },
});

export default styles;
