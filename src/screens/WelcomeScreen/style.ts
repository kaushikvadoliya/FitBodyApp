import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  welcomeText: {
    fontFamily: 'League Spartan',
    fontSize: 25,
    color: colors.secondary,
    fontWeight: '800',
    top: verticalScale(326),
    left: horizontalScale(132),
    lineHeight: 28,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  icon: {
    height: 84,
    width: 182,
    top: verticalScale(346),
    left: horizontalScale(105),
  },
  fitText: {
    fontWeight: '800',
    color: colors.secondary,
    fontSize: 54,
    fontStyle: 'italic',
    width: 374,
    textAlign: 'center',
    left: horizontalScale(9),
    top: verticalScale(342),
  },
  bodyText: {
    fontWeight: '400',
  },
});

export default styles;
