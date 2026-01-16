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
    </Stack.Navigator>
  );
};

export default HomeStack;
