import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  smallInput: {
    backgroundColor: colors.white,
    borderRadius: 100,
    paddingLeft: 16,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    fontSize: normalize(12),
    height: verticalScale(26),
    width: horizontalScale(330),
  },
  largeInput: {
    backgroundColor: colors.white,
    borderRadius: 100,
    paddingLeft: 16,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    fontSize: normalize(19),
    height: verticalScale(41),
    width: horizontalScale(330),
  },
});

export default styles;
