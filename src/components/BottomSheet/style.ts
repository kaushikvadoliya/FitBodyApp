import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  bottomSheetText: {
    fontFamily: 'League Spartan',
    fontSize: normalize(18),
    fontWeight: '500',
    width: horizontalScale(200),
    textAlign: 'center',
    marginTop: verticalScale(30),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    marginTop: verticalScale(30),
  },
});

export default styles;
