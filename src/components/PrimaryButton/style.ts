import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  button: {
    width: 211,
    height: 46,
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
  },
  // blurContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 23,
  // },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
});

export default styles;
