import { DataType } from '../HomeScreen/data';

export const searchData: DataType[] = [
  {
    id: 1,
    title: 'Upper Body',
    image: require('../../assets/images/workout1.jpg'),
    time: 60,
    kcal: 1320,
    exercises: 5,
    type: 'workOut',
  },
  {
    id: 2,
    title: 'Delights with Greek yogurt',
    time: 6,
    kcal: 1200,
    image: require('../../assets/images/article6.jpg'),
    type: 'Nutrition',
  },
  {
    id: 3,
    title: 'Circuit Training',
    image: require('../../assets/images/workout6.jpg'),
    time: 50,
    kcal: 1300,
    exercises: 5,
    type: 'workOut',
  },
  {
    id: 4,
    title: 'Avocado and Egg Toast',
    time: 15,
    kcal: 150,
    image: require('../../assets/images/article2.jpg'),
    type: 'Nutrition',
  },

  {
    id: 5,
    title: 'Turkey and Avocado Wrap',
    time: 8,
    kcal: 1100,
    image: require('../../assets/images/article7.jpg'),
    type: 'Nutrition',
  },
  {
    id: 6,
    title: 'Loop Band Exercises',
    image: require('../../assets/images/workout3.jpg'),
    time: 45,
    kcal: 785,
    exercises: 5,
    type: 'workOut',
  },
  {
    id: 7,
    title: 'Dumbbell Step Up',
    image: require('../../assets/images/workout4.jpg'),
    time: 13,
    kcal: 1385,
    exercises: 3,
    type: 'workOut',
  },
  {
    id: 8,
    title: 'Fruit Smoothie',
    time: 12,
    kcal: 120,
    image: require('../../assets/images/article4.jpg'),
    type: 'Nutrition',
  },
];

export type SearchItemType = {
  id: number;
  text: String;
};

export const workoutSearchList: SearchItemType[] = [
  {
    id: 1,
    text: 'Circuit',
  },
  {
    id: 2,
    text: 'Split',
  },
  {
    id: 3,
    text: 'Challenge',
  },
  {
    id: 4,
    text: 'Legs',
  },
  {
    id: 5,
    text: 'Cardio',
  },
];

export const nutritionSearchList = [
  {
    id: 1,
    text: 'BreakFast',
  },
  {
    id: 2,
    text: 'Yogurt',
  },
  {
    id: 3,
    text: 'Vegetarian',
  },
  {
    id: 4,
    text: 'Smoothie',
  },
  {
    id: 5,
    text: 'Chicken',
  },
];
