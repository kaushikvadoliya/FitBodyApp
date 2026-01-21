import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatlistContainer: {
    marginTop: verticalScale(30),
    alignItems: 'center',
  },
  flatlistStyle: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(14),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: horizontalScale(20),
  },
  toastText: {
    backgroundColor: colors.white,
    height: '100%',
  },
  toaststyle: {
    backgroundColor: colors.white,
    color: colors.black,
    minWidth: horizontalScale(100),
  },
});

export default styles;
