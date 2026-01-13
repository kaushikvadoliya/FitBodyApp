import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  seprator: {
    height: verticalScale(40),
    backgroundColor: colors.primary,
    borderWidth: 0.75,
    borderColor: colors.primary,
    alignSelf: 'center',
    marginHorizontal: horizontalScale(10),
  },

  icon: {
    height: verticalScale(30),
    width: horizontalScale(32),
  },
  progress: {
    height: verticalScale(32),
    width: horizontalScale(28),
  },
  dumble: {
    height: verticalScale(32),
    width: horizontalScale(32),
  },
  text: {
    fontSize: normalize(12),
    fontWeight: '300',
    color: colors.primary,
    textAlign: 'center',
  },
  container: {
    gap: verticalScale(10),
    width: horizontalScale(68),
    height: verticalScale(76),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
