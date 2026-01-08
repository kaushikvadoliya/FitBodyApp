import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

const scale = width / 375;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
