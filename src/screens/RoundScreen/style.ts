import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardContainer: {
    height: verticalScale(204),
    marginTop: verticalScale(25),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(25),
  },
  roundText: {
    fontFamily: 'Poppins',
    fontSize: normalize(20),
    fontWeight: '500',
    lineHeight: verticalScale(20),
    color: colors.secondary,
  },
});

export default styles;
