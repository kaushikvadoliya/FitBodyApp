import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.75,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  mainContainer: {
    width: horizontalScale(330),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(14),
    alignItems: 'center',
  },
  icon: {
    width: horizontalScale(11),
    height: verticalScale(6),
  },
  text: {
    fontFamily: 'League Spartan',
    fontSize: normalize(18),
    fontWeight: '500',
    marginLeft: horizontalScale(5),
  },
  description: {
    fontSize: normalize(14),
    fontFamily: 'League Spartan',
    fontWeight: '300',
    color: colors.white,
    lineHeight: verticalScale(14),
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(14),
  },
});

export default styles;
