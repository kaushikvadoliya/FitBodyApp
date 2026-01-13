import { ImageSourcePropType } from 'react-native';

type dataType = 'Article' | 'Video';

export type DataType = {
  id: number;
  text?: string;
  image: ImageSourcePropType;
  time?: number;
  kcal?: number;
  title?: string;
  type: dataType;
  exercises?: number;
};

export const data: DataType[] = [
  {
    id: 1,
    text: 'Squat Excercise',
    image: require('../../assets/images/workoutImage1.jpg'),
    exercises: 7,
    time: 12,
    kcal: 120,
    type: 'Video',
  },
  {
    id: 2,
    title: 'Fuel Your Progres',
    text: 'Supplement Guide optimize recovery, and boost your overall energy for peak fitness performance.',
    image: require('../../assets/images/articleImage1.jpg'),
    type: 'Article',
  },
  {
    id: 3,
    text: 'Full Body Stretching',
    image: require('../../assets/images/workoutImage2.jpg'),
    time: 15,
    exercises: 5,
    kcal: 150,
    type: 'Video',
  },

  {
    id: 4,
    title: 'Elevate Your Day',
    text: '15 Quick and Effective Daily Routines for you Optimize your morning with simple habits for energy and focus.',
    image: require('../../assets/images/articleImage2.jpg'),
    type: 'Article',
  },
  {
    id: 5,
    title: 'Boost Energy and Vitality',
    text: 'Incorporating physical exercise add to your daily routine can boost...',
    image: require('../../assets/images/article1.jpg'),
    type: 'Article',
  },
  {
    id: 6,
    title: 'Avocado and Egg Toast',
    time: 15,
    kcal: 150,
    image: require('../../assets/images/article2.jpg'),
    type: 'Article',
  },
  {
    id: 7,
    title: 'Lower Body Blast',
    text: 'Incorporating physical exercise into your daily routine can boost...',
    image: require('../../assets/images/article3.jpg'),
    type: 'Article',
  },
  {
    id: 8,
    title: 'Fruit Smoothie',
    time: 12,
    kcal: 120,
    image: require('../../assets/images/article4.jpg'),
    type: 'Article',
  },
  {
    id: 9,
    title: 'Hydrate Properly',
    text: 'Stay hydrated before, during, and after your workouts to optimize...',
    image: require('../../assets/images/article5.jpg'),
    type: 'Article',
  },
  {
    id: 10,
    text: 'Upper Body',
    image: require('../../assets/images/video1.jpg'),
    time: 60,
    kcal: 1320,
    exercises: 5,
    type: 'Video',
  },
  {
    id: 11,
    text: 'Pull Out',
    image: require('../../assets/images/video2.jpg'),
    time: 30,
    kcal: 1210,
    exercises: 10,
    type: 'Video',
  },
  {
    id: 12,
    text: 'Loop Band Exercises',
    image: require('../../assets/images/video3.jpg'),
    time: 45,
    kcal: 785,
    exercises: 5,
    type: 'Video',
  },
  {
    id: 13,
    text: 'Dumbbell Step Up',
    image: require('../../assets/images/video1.jpg'),
    time: 13,
    kcal: 1385,
    exercises: 3,
    type: 'Video',
  },
  {
    id: 14,
    text: 'Split Strength Training',
    image: require('../../assets/images/video1.jpg'),
    time: 12,
    kcal: 1250,
    exercises: 5,
    type: 'Video',
  },
];
