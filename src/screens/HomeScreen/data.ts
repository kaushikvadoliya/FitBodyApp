import { ImageSourcePropType } from 'react-native';

type dataType = 'Article' | 'workOut' | 'Nutrition';

export type DataType = {
  id: number;
  text?: string;
  image: ImageSourcePropType;
  time?: number;
  kcal?: number;
  title?: string;
  type: dataType;
  exercises?: number;
  video?: boolean;
};

export const data: DataType[] = [
  {
    id: 1,
    title: 'Squat Excercise',
    image: require('../../assets/images/workoutImage1.jpg'),
    exercises: 7,
    time: 12,
    kcal: 120,
    video: true,
    type: 'workOut',
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
    title: 'Full Body Stretching',
    image: require('../../assets/images/workoutImage2.jpg'),
    time: 15,
    exercises: 5,
    kcal: 150,
    type: 'workOut',
    video: true,
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
    title: 'Upper Body',
    image: require('../../assets/images/workout1.jpg'),
    time: 60,
    kcal: 1320,
    exercises: 5,
    type: 'workOut',
    video: true,
  },
  {
    id: 11,
    title: 'Pull Out',
    image: require('../../assets/images/workout2.jpg'),
    time: 30,
    kcal: 1210,
    exercises: 10,
    type: 'workOut',
    video: true,
  },
  {
    id: 12,
    title: 'Loop Band Exercises',
    image: require('../../assets/images/workout3.jpg'),
    time: 45,
    kcal: 785,
    exercises: 5,
    type: 'workOut',
    video: true,
  },
  {
    id: 13,
    title: 'Dumbbell Step Up',
    image: require('../../assets/images/workout4.jpg'),
    time: 13,
    kcal: 1385,
    exercises: 3,
    type: 'workOut',
    video: true,
  },
  {
    id: 14,
    title: 'Split Strength Training',
    image: require('../../assets/images/workout5.jpg'),
    time: 12,
    kcal: 1250,
    exercises: 5,
    type: 'workOut',
    video: true,
  },
  {
    id: 15,
    title: 'Circuit Training',
    image: require('../../assets/images/workout6.jpg'),
    time: 50,
    kcal: 1300,
    exercises: 5,
    type: 'workOut',
    video: true,
  },
  {
    id: 16,
    title: 'Delights with Greek yogurt',
    time: 6,
    kcal: 1200,
    image: require('../../assets/images/article6.jpg'),
    type: 'Article',
  },
  {
    id: 17,
    title: 'Turkey and Avocado Wrap',
    time: 8,
    kcal: 1100,
    image: require('../../assets/images/article7.jpg'),
    type: 'Article',
  },
];
