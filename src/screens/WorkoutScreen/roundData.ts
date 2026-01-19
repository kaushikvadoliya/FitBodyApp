import { ImageSourcePropType } from 'react-native';

export type Exercise = {
  id: number;
  title: string;
  timer: number;
  repetition: number;
  image: ImageSourcePropType;
  favorite: boolean;
  description: string;
  physicallLevel: 'Beginner' | 'Intermediate' | 'Advanced';
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
        id: 11,
        title: 'Dumbbell Rows',
        timer: 30,
        repetition: 3,
        image: require('../../assets/images/dumbbell.jpg'),
        favorite: false,
        description:
          'Strengthen your back and bicep muscles by pulling the dumbbell upwards while keeping your spine straight.',
        physicallLevel: 'Beginner',
      },
      {
        id: 12,
        title: 'Russian Twists',
        timer: 15,
        repetition: 2,
        image: require('../../assets/images/russianTwists.jpg'),
        favorite: true,
        description:
          'Sitting on the floor, lean back slightly and rotate your torso side-to-side to strengthen your obliques.',
        physicallLevel: 'Beginner',
      },
      {
        id: 13,
        title: 'squats',
        timer: 30,
        repetition: 3,
        image: require('../../assets/images/squats.jpg'),
        favorite: true,
        description:
          'Lower your hips by bending your knees while keeping your back straight to strengthen your legs.',
        physicallLevel: 'Beginner',
      },
    ],
  },
  {
    round: 2,
    data: [
      {
        id: 21,
        title: 'Tabata Intervals',
        timer: 10,
        repetition: 2,
        image: require('../../assets/images/tabata.jpg'),
        favorite: false,
        description:
          'Perform high-intensity exercise for twenty seconds followed by ten seconds of rest for eight total rounds.',
        physicallLevel: 'Beginner',
      },
      {
        id: 22,
        title: 'Bicycle Crunches',
        timer: 10,
        repetition: 4,
        image: require('../../assets/images/bicycle.jpg'),
        favorite: true,
        description:
          'Lie on your back, pedaling legs while touching opposite elbows to knees to engage your core muscles.',
        physicallLevel: 'Beginner',
      },
      {
        id: 23,
        title: 'Glute Bridges',
        timer: 60,
        repetition: 5,
        image: require('../../assets/images/workout1.jpg'),
        favorite: false,
        description:
          'Lie on your back with knees bent, lifting your hips toward the ceiling to strengthen your glutes.',
        physicallLevel: 'Beginner',
      },
    ],
  },
  {
    round: 3,
    data: [
      {
        id: 31,
        title: 'Plank',
        timer: 45,
        repetition: 4,
        image: require('../../assets/images/plank.jpg'),
        favorite: false,
        description:
          'Hold a push-up position on your forearms, keeping your body in a straight line to strengthen core.',
        physicallLevel: 'Beginner',
      },
      {
        id: 32,
        title: 'Bicep Curls',
        timer: 12,
        repetition: 3,
        image: require('../../assets/images/bicepsCurl.jpg'),
        favorite: true,
        description:
          'Hold dumbbells at your sides, then curl the weights toward your shoulders to strengthen your arm muscles.',
        physicallLevel: 'Beginner',
      },
    ],
  },
];

export const intermediateRounds: Round[] = [
  {
    round: 1,
    data: [
      {
        id: 11,
        title: 'Kettlebell swing',
        timer: 30,
        repetition: 3,
        image: require('../../assets/images/kettlebell.jpg'),
        favorite: true,
        description:
          'Hinge your hips back, then swing the kettlebell to chest height using power from your glutes.',
        physicallLevel: 'Intermediate',
      },
      {
        id: 12,
        title: 'Shoulder Press',
        timer: 15,
        repetition: 2,
        image: require('../../assets/images/shoulderPress.jpg'),
        favorite: true,
        description:
          'Push weights from shoulder height toward the ceiling until arms are fully extended to build shoulders.',
        physicallLevel: 'Intermediate',
      },
      {
        id: 13,
        title: 'Hamstring Curls',
        timer: 30,
        repetition: 3,
        image: require('../../assets/images/hamstring.jpg'),
        favorite: false,
        description:
          'Lie on your stomach and curl your heels toward your glutes against resistance to strengthen hamstrings.',
        physicallLevel: 'Intermediate',
      },
    ],
  },
  {
    round: 2,
    data: [
      {
        id: 21,
        title: 'Bicep Curls',
        timer: 10,
        repetition: 2,
        image: require('../../assets/images/bicepsCurl.jpg'),
        favorite: false,
        description:
          'Hold dumbbells at your sides, then curl the weights toward your shoulders to strengthen your arm muscles.',
        physicallLevel: 'Intermediate',
      },
      {
        id: 22,
        title: 'Barbell deadlift',
        timer: 20,
        repetition: 4,
        image: require('../../assets/images/barbelldeadlift.jpg'),
        favorite: false,
        description:
          'Hinge at your hips to lift the barbell from the floor, standing tall to strengthen your posterior.',
        physicallLevel: 'Intermediate',
      },
    ],
  },
];

export const advancedRounds: Round[] = [
  {
    round: 1,
    data: [
      {
        id: 11,
        title: 'Barbell Bench Press',
        timer: 30,
        repetition: 3,
        image: require('../../assets/images/barbellBench.jpg'),
        favorite: false,
        description:
          'Lie on a flat bench and press the barbell upward from your chest to build pectoral strength.',
        physicallLevel: 'Advanced',
      },
      {
        id: 12,
        title: 'Tricep Dips',
        timer: 15,
        repetition: 2,
        image: require('../../assets/images/tricepDips.jpg'),
        favorite: false,
        description:
          'Lower your body using parallel bars or a bench, then push back up to strengthen triceps.',
        physicallLevel: 'Advanced',
      },
    ],
  },
  {
    round: 2,
    data: [
      {
        id: 21,
        title: 'Incline Bench Sit up',
        timer: 45,
        repetition: 4,
        image: require('../../assets/images/inclineBench.jpg'),
        favorite: true,
        description:
          'Secure your feet, lie back on an incline bench, then lift your torso toward your knees.',
        physicallLevel: 'Advanced',
      },
      {
        id: 22,
        title: 'Romanian Deadlifts',
        timer: 10,
        repetition: 2,
        image: require('../../assets/images/romanianDeadlifts.jpg'),
        favorite: false,
        description:
          'Hinge your hips back while lowering the weight along your legs to stretch and strengthen hamstrings.',
        physicallLevel: 'Advanced',
      },
      {
        id: 23,
        title: 'Foam Rolling',
        timer: 20,
        repetition: 4,
        image: require('../../assets/images/foamRolling.jpg'),
        favorite: true,
        description:
          'Apply pressure to sore muscles by slowly rolling over a foam cylinder to release tight fascia.',
        physicallLevel: 'Advanced',
      },
    ],
  },
];
