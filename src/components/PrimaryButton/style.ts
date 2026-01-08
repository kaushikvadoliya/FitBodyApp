import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { horizontalScale } from '../../helper/Scaling';
import { normalize } from '../../helper/DynamicSize';

const styles = StyleSheet.create({
  button: {
    minWidth: horizontalScale(200),
    height: 48,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.white,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,100,0.6)',
    paddingHorizontal: horizontalScale(20),
  },
  // blurContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 23,
  // },
  buttonText: {
    color: colors.white,
    fontSize: normalize(18),
    fontWeight: '800',
  },
});

export default styles;
