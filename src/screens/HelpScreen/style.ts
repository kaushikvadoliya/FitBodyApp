import { StyleSheet } from 'react-native';
import { normalize } from '../../helper/DynamicSize';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  heading: {
    fontSize: normalize(20),
    fontFamily: 'League Spartan',
    fontWeight: '400',
    lineHeight: verticalScale(20),
    color: colors.white,
    marginTop: verticalScale(50),
  },
  buttoncontainer: {
    marginTop: verticalScale(16),
    gap: horizontalScale(12),
  },
  tabContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16),
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: horizontalScale(8),
  },
  contactUsContainer: {
    marginTop: verticalScale(25),
    gap: verticalScale(16),
  },
  faqContainer: {
    marginTop: verticalScale(20),
  },
});

export default styles;
