import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    width: horizontalScale(323),
    height: verticalScale(60),
    backgroundColor: colors.purple,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heightWeightContainer: {
    width: horizontalScale(80),
    alignItems: 'center',
  },
  yearContainer: {
    width: horizontalScale(160),
    alignItems: 'center',
  },
  value: {
    fontFamily: 'League Spartan',
    fontSize: normalize(15),
    fontWeight: '600',
    color: colors.white,
  },
  text: {
    fontFamily: 'League Spartan',
    fontSize: normalize(15),
    fontWeight: '300',
    color: colors.white,
  },
  seprator: {
    height: verticalScale(41),
    borderWidth: horizontalScale(0.6),
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
});

export default styles;
