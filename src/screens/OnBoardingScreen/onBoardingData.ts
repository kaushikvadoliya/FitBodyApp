import { ImageProps } from 'react-native';

export type OnBoardingDataType = {
  id: number;
  description: string;
  image: ImageProps;
  buttonText: string;
  icon: ImageProps;
};

export const onBoardingData: OnBoardingDataType[] = [
  {
    id: 1,
    description: 'Start Your Journey Towards A More Active LifeStyle',
    image: require('../../assets/images/onBoardingImage1.jpg'),
    buttonText: 'Next',
    icon: require('../../assets/icons/workOut.png'),
  },
  {
    id: 2,
    description: 'Find Nutrition Tips That Fit Your Lifestyle',
    image: require('../../assets/images/onBoardingImage2.jpg'),
    buttonText: 'Next',
    icon: require('../../assets/icons/nutrition.png'),
  },
  {
    id: 3,
    description: 'A Community For You, Challenge Yourself',
    image: require('../../assets/images/onBoardingImage3.jpg'),
    buttonText: 'Get Started',
    icon: require('../../assets/icons/community.png'),
  },
];
