import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(324),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    borderRadius: 36,
    alignItems: 'center',
    height: verticalScale(54),
    borderWidth: 1,
    borderColor: colors.white,
  },
  text: {
    fontFamily: 'League Spartan',
    marginLeft: horizontalScale(20),
    fontSize: normalize(18),
    fontWeight: '400',
  },
});

export default styles;
