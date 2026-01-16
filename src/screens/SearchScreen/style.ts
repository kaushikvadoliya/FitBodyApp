import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  searchContainer: {
    gap: verticalScale(14),
    marginTop: verticalScale(8),
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  cardContainer: {
    marginTop: verticalScale(20),
  },
  flatList: {
    gap: horizontalScale(14),
  },
  flatlistContainer: {
    marginTop: verticalScale(20),
    flex: 1,
  },
  flatlistStyle: {
    gap: verticalScale(14),
  },
  searchesContainer: {
    marginTop: verticalScale(25),
    flex: 1,
    gap: verticalScale(25),
  },
  topSearch: {
    fontFamily: 'Poppins',
    fontSize: normalize(20),
    fontWeight: '500',
    lineHeight: verticalScale(24),
    color: colors.secondary,
  },
  searchList: {
    gap: verticalScale(10),
  },
});

export default styles;
