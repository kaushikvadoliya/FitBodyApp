import { DataType } from '../HomeScreen/data';

type WorkoutType = {
  featureData: DataType;
  data: DataType[];
};

export const beginnerWorkout: WorkoutType = {
  featureData: {
    id: 1,
    title: 'functional training',
    time: 45,
    kcal: 1450,
    exercises: 5,
    image: require('../../assets/images/beginnerImage.jpg'),
    type: 'workOut',
    physicalLevel: 'Beginner',
    text: 'Training Of The Day',
  },
  data: [
    {
      id: 11,
      title: 'upper body',
      time: 60,
      kcal: 1320,
      exercises: 5,
      image: require('../../assets/images/workout1.jpg'),
      type: 'workOut',
    },
    {
      id: 12,
      title: 'Full body stretching',
      time: 45,
      kcal: 1450,
      exercises: 5,
      image: require('../../assets/images/workoutImage2.jpg'),
      type: 'workOut',
    },
    {
      id: 13,
      title: 'Glutes & Abs',
      time: 35,
      kcal: 1150,
      exercises: 4,
      image: require('../../assets/images/workout7.jpg'),
      type: 'workOut',
    },
  ],
};

export const intermediateWorkout: WorkoutType = {
  featureData: {
    id: 2,
    text: 'Training Of The Day',
    title: 'cardio fitness',
    time: 45,
    kcal: 120,
    exercises: 5,
    image: require('../../assets/images/intermediateImage.jpg'),
    type: 'workOut',
    physicalLevel: 'Intermediate',
  },
  data: [
    {
      id: 21,
      title: 'Circuit Training',
      time: 50,
      kcal: 1300,
      exercises: 5,
      image: require('../../assets/images/workout2.jpg'),
      type: 'workOut',
    },
    {
      id: 22,
      title: 'Split Strength Training',
      time: 12,
      kcal: 1250,
      exercises: 5,
      image: require('../../assets/images/workout5.jpg'),
      type: 'workOut',
    },
    {
      id: 23,
      title: 'Resistance Training',
      time: 45,
      kcal: 11320,
      exercises: 4,
      image: require('../../assets/images/workout8.jpg'),
      type: 'workOut',
    },
  ],
};

export const AdvancedWorkout: WorkoutType = {
  featureData: {
    id: 3,
    text: 'Training Of The Day',
    title: 'Upper Body Strength',
    time: 60,
    kcal: 120,
    exercises: 5,
    image: require('../../assets/images/advancedImage.jpg'),
    type: 'workOut',
    physicalLevel: 'Advanced',
  },
  data: [
    {
      id: 31,
      title: 'cardio boxing',
      time: 50,
      kcal: 1300,
      exercises: 5,
      image: require('../../assets/images/workout9.jpg'),
      type: 'workOut',
    },
    {
      id: 32,
      title: 'Hypertrophy - Legs',
      time: 12,
      kcal: 1250,
      exercises: 5,
      image: require('../../assets/images/workout10.jpg'),
      type: 'workOut',
    },
    {
      id: 33,
      title: 'Rest or Active Recovery',
      time: 30,
      kcal: 1120,
      exercises: 4,
      image: require('../../assets/images/workout3.jpg'),
      type: 'workOut',
    },
  ],
};

export const beginnerText = {
  title: "Let's Go Beginner",
  subTitle: 'Explore Different Workout Styles',
};
export const intermediateText = {
  title: 'Keep Raising your Level',
  subTitle: 'Explore Intermediate Workouts',
};
export const advancedText = {
  title: 'Unlock Your Potential',
  subTitle: 'Explore Advanced Fitness Routines',
};
