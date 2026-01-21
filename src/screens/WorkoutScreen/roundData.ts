import { ImageSourcePropType } from 'react-native';
import uuid from 'react-native-uuid';

export type Exercise = {
  id: string;
  title: string;
  time: number;
  repetition: number;
  image: ImageSourcePropType;
  favorite?: boolean;
  description: string;
  physicalLevel: 'Beginner' | 'Intermediate' | 'Advanced';
};

export type Round = {
  round: number;
  data: Exercise[];
};

export const beginnerRounds: Round[] = [
  {
    round: 1,
    data: [
      {
        id: uuid.v4(),
        title: 'Dumbbell Rows',
        time: 30,
        repetition: 3,
        image: require('../../assets/images/dumbbell.jpg'),
        description:
          'Strengthen your back and bicep muscles by pulling the dumbbell upwards while keeping your spine straight.',
        physicalLevel: 'Beginner',
      },
      {
        id: uuid.v4(),
        title: 'Russian Twists',
        time: 15,
        repetition: 2,
        image: require('../../assets/images/russianTwists.jpg'),
        description:
          'Sitting on the floor, lean back slightly and rotate your torso side-to-side to strengthen your obliques.',
        physicalLevel: 'Beginner',
      },
      {
        id: uuid.v4(),
        title: 'squats',
        time: 30,
        repetition: 3,
        image: require('../../assets/images/squats.jpg'),
        description:
          'Lower your hips by bending your knees while keeping your back straight to strengthen your legs.',
        physicalLevel: 'Beginner',
      },
    ],
  },
  {
    round: 2,
    data: [
      {
        id: uuid.v4(),
        title: 'Tabata Intervals',
        time: 10,
        repetition: 2,
        image: require('../../assets/images/tabata.jpg'),
        description:
          'Perform high-intensity exercise for twenty seconds followed by ten seconds of rest for eight total rounds.',
        physicalLevel: 'Beginner',
      },
      {
        id: uuid.v4(),
        title: 'Bicycle Crunches',
        time: 10,
        repetition: 4,
        image: require('../../assets/images/bicycle.jpg'),
        description:
          'Lie on your back, pedaling legs while touching opposite elbows to knees to engage your core muscles.',
        physicalLevel: 'Beginner',
      },
      {
        id: uuid.v4(),
        title: 'Glute Bridges',
        time: 60,
        repetition: 5,
        image: require('../../assets/images/workout1.jpg'),
        description:
          'Lie on your back with knees bent, lifting your hips toward the ceiling to strengthen your glutes.',
        physicalLevel: 'Beginner',
      },
    ],
  },
  {
    round: 3,
    data: [
      {
        id: uuid.v4(),
        title: 'Plank',
        time: 45,
        repetition: 4,
        image: require('../../assets/images/plank.jpg'),
        description:
          'Hold a push-up position on your forearms, keeping your body in a straight line to strengthen core.',
        physicalLevel: 'Beginner',
      },
      {
        id: uuid.v4(),
        title: 'Bicep Curls',
        time: 12,
        repetition: 3,
        image: require('../../assets/images/bicepsCurl.jpg'),
        description:
          'Hold dumbbells at your sides, then curl the weights toward your shoulders to strengthen your arm muscles.',
        physicalLevel: 'Beginner',
      },
    ],
  },
];

export const intermediateRounds: Round[] = [
  {
    round: 1,
    data: [
      {
        id: uuid.v4(),
        title: 'Kettlebell swing',
        time: 30,
        repetition: 3,
        image: require('../../assets/images/kettlebell.jpg'),
        description:
          'Hinge your hips back, then swing the kettlebell to chest height using power from your glutes.',
        physicalLevel: 'Intermediate',
      },
      {
        id: uuid.v4(),
        title: 'Shoulder Press',
        time: 15,
        repetition: 2,
        image: require('../../assets/images/shoulderPress.jpg'),
        description:
          'Push weights from shoulder height toward the ceiling until arms are fully extended to build shoulders.',
        physicalLevel: 'Intermediate',
      },
      {
        id: uuid.v4(),
        title: 'Hamstring Curls',
        time: 30,
        repetition: 3,
        image: require('../../assets/images/hamstring.jpg'),
        description:
          'Lie on your stomach and curl your heels toward your glutes against resistance to strengthen hamstrings.',
        physicalLevel: 'Intermediate',
      },
    ],
  },
  {
    round: 2,
    data: [
      {
        id: uuid.v4(),
        title: 'Bicep Curls',
        time: 10,
        repetition: 2,
        image: require('../../assets/images/bicepsCurl.jpg'),
        description:
          'Hold dumbbells at your sides, then curl the weights toward your shoulders to strengthen your arm muscles.',
        physicalLevel: 'Intermediate',
      },
      {
        id: uuid.v4(),
        title: 'Barbell deadlift',
        time: 20,
        repetition: 4,
        image: require('../../assets/images/barbelldeadlift.jpg'),
        description:
          'Hinge at your hips to lift the barbell from the floor, standing tall to strengthen your posterior.',
        physicalLevel: 'Intermediate',
      },
    ],
  },
];

export const advancedRounds: Round[] = [
  {
    round: 1,
    data: [
      {
        id: uuid.v4(),
        title: 'Barbell Bench Press',
        time: 30,
        repetition: 3,
        image: require('../../assets/images/barbellBench.jpg'),
        description:
          'Lie on a flat bench and press the barbell upward from your chest to build pectoral strength.',
        physicalLevel: 'Advanced',
      },
      {
        id: uuid.v4(),
        title: 'Tricep Dips',
        time: 15,
        repetition: 2,
        image: require('../../assets/images/tricepDips.jpg'),
        description:
          'Lower your body using parallel bars or a bench, then push back up to strengthen triceps.',
        physicalLevel: 'Advanced',
      },
    ],
  },
  {
    round: 2,
    data: [
      {
        id: uuid.v4(),
        title: 'Incline Bench Sit up',
        time: 45,
        repetition: 4,
        image: require('../../assets/images/inclineBench.jpg'),
        description:
          'Secure your feet, lie back on an incline bench, then lift your torso toward your knees.',
        physicalLevel: 'Advanced',
      },
      {
        id: uuid.v4(),
        title: 'Romanian Deadlifts',
        time: 10,
        repetition: 2,
        image: require('../../assets/images/romanianDeadlifts.jpg'),
        description:
          'Hinge your hips back while lowering the weight along your legs to stretch and strengthen hamstrings.',
        physicalLevel: 'Advanced',
      },
      {
        id: uuid.v4(),
        title: 'Foam Rolling',
        time: 20,
        repetition: 4,
        image: require('../../assets/images/foamRolling.jpg'),
        description:
          'Apply pressure to sore muscles by slowly rolling over a foam cylinder to release tight fascia.',
        physicalLevel: 'Advanced',
      },
    ],
  },
];
