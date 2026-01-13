import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: horizontalScale(14),
  },
  searchIcon: {
    width: horizontalScale(19),
    height: verticalScale(18),
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(18),
  },
  backTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  icon: {
    height: verticalScale(18),
    width: horizontalScale(15),
  },
  back: {
    height: verticalScale(11),
    width: horizontalScale(6),
  },
  text: {
    fontSize: normalize(20),
    fontFamily: 'Poppins',
    fontWeight: '800',
  },
  heading: {},
});

export default styles;
