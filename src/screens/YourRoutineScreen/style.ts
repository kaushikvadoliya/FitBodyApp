import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
    alignItems: 'center',
  },
  roundText: {
    fontFamily: 'Poppins',
    fontSize: normalize(20),
    fontWeight: '500',
    lineHeight: verticalScale(20),
    color: colors.secondary,
  },
  sectionListContainer: {
    marginTop: verticalScale(30),
  },
});

export default styles;
