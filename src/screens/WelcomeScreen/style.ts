import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  welcomeText: {
    fontFamily: 'League Spartan',
    fontSize: normalize(24),
    color: colors.secondary,
    fontWeight: '800',
    top: verticalScale(326),
    textAlign: 'center',
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
    alignSelf: 'center',
  },
  fitText: {
    fontWeight: '800',
    color: colors.secondary,
    fontSize: normalize(54),
    fontStyle: 'italic',
    width: 374,
    textAlign: 'center',
    top: verticalScale(342),
    alignSelf: 'center',
  },
  bodyText: {
    fontWeight: '400',
  },
});

export default styles;
