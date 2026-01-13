import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import FavoritesScreen from '../screens/FavotitesScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationsSettingScreen from '../screens/NotificationsSettingScreen';
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
    </Stack.Navigator>
  );
};

export default HomeStack;
