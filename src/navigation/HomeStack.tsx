import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import FavoritesScreen from '../screens/FavotitesScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationsSettingScreen from '../screens/NotificationsSettingScreen';
import PasswordSettingScreen from '../screens/PasswordSettingScreen';
import HelpScreen from '../screens/HelpScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from '../screens/SearchScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import RoundScreen from '../screens/RoundScreen';
import VideoScreen from '../screens/VideoScreen';
import CreateYourRoutineScreen from '../screens/CreateYourRoutineScreen';
import YourRoutineScreen from '../screens/YourRoutineScreen';
import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen
        name="NotificationsSetting"
        component={NotificationsSettingScreen}
      />
      <Stack.Screen name="PasswordSetting" component={PasswordSettingScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
      <Stack.Screen name="Round" component={RoundScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen
        name="CreateYourRoutine"
        component={CreateYourRoutineScreen}
      />
      <Stack.Screen name="YourRoutine" component={YourRoutineScreen} />
      <Stack.Screen
        name="ProgressTracking"
        component={ProgressTrackingScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
