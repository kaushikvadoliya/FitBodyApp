import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(14),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(18),
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: normalize(12),
    fontWeight: '400',
    color: colors.secondary,
    width: horizontalScale(84),
    textAlign: 'center',
  },
  flatlistContainer: {
    marginTop: verticalScale(34),
  },
  flatlistStyle: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(14),
  },
});

export default styles;
