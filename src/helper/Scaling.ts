import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BaseWidth = 375;
const BaseHeight = 812;

const horizontalScale = (size: number) => (width / BaseWidth) * size;
const verticalScale = (size: number) => (height / BaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
