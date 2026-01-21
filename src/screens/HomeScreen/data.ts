import { ImageSourcePropType } from 'react-native';
import uuid from 'react-native-uuid';
type dataType = 'Article' | 'workOut' | 'Nutrition';
type physicalLevelType = 'Beginner' | 'Intermediate' | 'Advanced';

export type DataType = {
  video?: boolean;
  id: string;
  text?: string;
  image: ImageSourcePropType;
  time?: number;
  kcal?: number;
  title?: string;
  type: dataType;
  exercises?: number;
  physicalLevel?: physicalLevelType;
  select?: boolean;
  repetition?: number;
  favorite?: boolean;
  description?: string;
};

export const data: DataType[] = [
  {
    id: uuid.v4(),
    title: 'Squat Exercise',
    image: require('../../assets/images/workoutImage1.jpg'),
    description:
      'Master your lower body strength with proper squat form to build powerful glutes, quads, and core stability for daily movements.',
    exercises: 7,
    time: 12,
    kcal: 120,
    type: 'workOut',
    repetition: 4,
    physicalLevel: 'Beginner',
  },
  {
    id: uuid.v4(),
    title: 'Delights with Greek yogurt',
    description:
      'Enjoy a protein-packed snack featuring creamy Greek yogurt topped with fresh seasonal berries and a drizzle of honey for energy.',
    time: 6,
    kcal: 1200,
    image: require('../../assets/images/article6.jpg'),
    type: 'Nutrition',
  },
  {
    id: uuid.v4(),
    title: 'Full Body Stretching',
    description:
      'Improve your flexibility and reduce muscle tension with this comprehensive stretching routine designed to enhance your overall range of motion.',
    image: require('../../assets/images/workoutImage2.jpg'),
    time: 15,
    exercises: 5,
    kcal: 150,
    type: 'workOut',
    repetition: 2,
    physicalLevel: 'Beginner',
  },
  {
    id: uuid.v4(),
    title: 'Elevate Your Day',
    description:
      'Optimize your morning with simple habits for energy and focus, using 15 quick and effective daily routines to transform your mindset.',
    image: require('../../assets/images/articleImage2.jpg'),
    type: 'Article',
  },
  {
    id: uuid.v4(),
    title: 'Boost Energy and Vitality',
    description:
      'Incorporating physical exercise into your daily routine can significantly boost your metabolic rate and leave you feeling refreshed and fully energized.',
    image: require('../../assets/images/article1.jpg'),
    type: 'Article',
  },
  {
    id: uuid.v4(),
    title: 'Avocado and Egg Toast',
    description:
      'A perfect balance of healthy fats and high-quality protein, this avocado and egg toast provides sustained fuel for your active lifestyle.',
    time: 15,
    kcal: 150,
    image: require('../../assets/images/article2.jpg'),
    type: 'Nutrition',
  },
  {
    id: uuid.v4(),
    title: 'Lower Body Blast',
    description:
      'Engage your hamstrings and glutes with this intense workout designed to strengthen your legs and improve your overall lower body power.',
    image: require('../../assets/images/article3.jpg'),
    type: 'Article',
  },
  {
    id: uuid.v4(),
    title: 'Fruit Smoothie',
    description:
      'Blend your favorite tropical fruits into a refreshing smoothie packed with essential vitamins and natural sugars for a quick post-workout recovery.',
    time: 12,
    kcal: 120,
    image: require('../../assets/images/article4.jpg'),
    type: 'Nutrition',
  },
  {
    id: uuid.v4(),
    title: 'Hydrate Properly',
    description:
      'Stay hydrated before, during, and after your workouts to optimize performance, prevent fatigue, and ensure your muscles recover at peak efficiency.',
    image: require('../../assets/images/article5.jpg'),
    type: 'Article',
  },
  {
    id: uuid.v4(),
    title: 'Upper Body',
    description:
      'Target your chest, back, and shoulders with these fundamental movements designed to build a strong foundation and improve your functional strength.',
    image: require('../../assets/images/workout1.jpg'),
    time: 60,
    kcal: 1320,
    exercises: 5,
    repetition: 3,
    type: 'workOut',
    physicalLevel: 'Beginner',
  },
  {
    id: uuid.v4(),
    title: 'Pull Out',
    description:
      'Focus on your posterior chain and back strength with controlled pulling movements that enhance your posture and develop impressive upper body definition.',
    image: require('../../assets/images/workout2.jpg'),
    time: 30,
    kcal: 1210,
    exercises: 10,
    type: 'workOut',
    repetition: 4,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Loop Band Exercises',
    description:
      'Utilize resistance bands to add constant tension to your muscles, perfecting small stabilizer movements that traditional weights might miss during training.',
    image: require('../../assets/images/workout3.jpg'),
    time: 45,
    kcal: 785,
    exercises: 5,
    type: 'workOut',
    repetition: 2,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Dumbbell Step Up',
    description:
      'Challenge your balance and unilateral leg strength by performing controlled step-ups with dumbbells to target your quads and improve core stability.',
    image: require('../../assets/images/workout4.jpg'),
    time: 13,
    kcal: 1385,
    exercises: 3,
    type: 'workOut',
    repetition: 5,
    physicalLevel: 'Advanced',
  },
  {
    id: uuid.v4(),
    title: 'Split Strength Training',
    description:
      'Break your workouts into specific muscle groups to allow for maximum intensity during training and optimal recovery time between your weekly sessions.',
    image: require('../../assets/images/workout5.jpg'),
    time: 12,
    kcal: 1250,
    exercises: 5,
    type: 'workOut',
    repetition: 5,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Circuit Training',
    description:
      'Keep your heart rate high and burn calories fast by rotating through different exercises with minimal rest for a total body conditioning.',
    image: require('../../assets/images/workout6.jpg'),
    time: 50,
    kcal: 1300,
    exercises: 5,
    type: 'workOut',
    repetition: 3,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Fuel Your Progress',
    description:
      'This supplement guide helps you optimize recovery and boost your overall energy for peak fitness performance through science-backed nutrition and timing.',
    image: require('../../assets/images/articleImage1.jpg'),
    type: 'Article',
  },
  {
    id: uuid.v4(),
    title: 'Turkey and Avocado Wrap',
    description:
      'Wrap up a healthy lunch with lean turkey breast and creamy avocado in a whole-grain tortilla for a satisfying, nutrient-dense midday meal.',
    time: 8,
    kcal: 1100,
    image: require('../../assets/images/article7.jpg'),
    type: 'Nutrition',
  },
  {
    id: uuid.v4(),
    title: 'Barbell Rows',
    description:
      'Build a thicker, stronger back by performing barbell rows with strict form, focusing on squeezing your shoulder blades together during every repetition.',
    image: require('../../assets/images/barbellRows.jpg'),
    time: 45,
    kcal: 1300,
    exercises: 4,
    type: 'workOut',
    repetition: 3,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Hammer Curls',
    description:
      'Target your brachialis and forearms using a neutral grip with hammer curls to build arm thickness and improve your overall grip strength.',
    image: require('../../assets/images/hammerCurls.jpg'),
    time: 30,
    kcal: 1100,
    exercises: 3,
    type: 'workOut',
    repetition: 5,
    physicalLevel: 'Advanced',
  },
  {
    id: uuid.v4(),
    title: 'Leg Press',
    description:
      'Safely overload your leg muscles using the leg press machine to build mass in your quads while minimizing strain on your lower back.',
    image: require('../../assets/images/legPress.jpg'),
    time: 45,
    kcal: 1320,
    exercises: 3,
    type: 'workOut',
    repetition: 2,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Cable Chest Press',
    description:
      'Maintain constant tension on your pectoral muscles using cables to achieve a deep stretch and a powerful contraction for better chest development.',
    image: require('../../assets/images/cableChestPress.jpg'),
    time: 15,
    kcal: 120,
    exercises: 5,
    type: 'workOut',
    repetition: 3,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Triceps Dips',
    description:
      'Use your body weight to target the back of your arms, building strong triceps and improving your lockout power for other pressing movements.',
    image: require('../../assets/images/tricepDips.jpg'),
    time: 50,
    kcal: 980,
    exercises: 3,
    type: 'workOut',
    repetition: 4,
    physicalLevel: 'Intermediate',
  },
  {
    id: uuid.v4(),
    title: 'Push-Ups',
    description:
      'Master this classic bodyweight exercise to develop your chest, shoulders, and triceps while building essential core stability and upper body endurance daily.',
    image: require('../../assets/images/pushups.jpg'),
    time: 30,
    kcal: 1200,
    exercises: 5,
    type: 'workOut',
    repetition: 2,
    physicalLevel: 'Intermediate',
  },
];

export const defaultRoutine = [
  {
    round: 1,
    data: [
      {
        list: data.filter(item => item.type === 'workOut').slice(0, 3),
      },
    ],
  },
];
