import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../helper/Scaling';

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: verticalScale(16),
    alignSelf: 'center',
  },
  container: {
    gap: verticalScale(16),
  },
  icon: {
    height: verticalScale(22),
    width: horizontalScale(22),
  },
  iconButton: {
    backgroundColor: colors.white,
    height: verticalScale(38),
    width: horizontalScale(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default styles;
