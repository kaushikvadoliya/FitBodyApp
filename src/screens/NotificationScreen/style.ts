import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    marginTop: verticalScale(18),
    justifyContent: 'center',
  },
  sectoinTitle: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    fontWeight: '500',
    lineHeight: verticalScale(12),
    color: colors.secondary,
    marginLeft: horizontalScale(16),
    top: verticalScale(10),
  },
  sectionlist: {
    marginTop: verticalScale(14),
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
