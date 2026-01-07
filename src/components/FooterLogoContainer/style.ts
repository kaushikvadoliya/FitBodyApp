import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 16,
    alignSelf: 'center',
  },
  container: {
    gap: 16,
  },
  icon: {
    height: 22,
    width: 22,
  },
  iconButton: {
    backgroundColor: colors.white,
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default styles;
