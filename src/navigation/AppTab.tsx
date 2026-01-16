import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { horizontalScale, verticalScale } from '../helper/Scaling';
import { colors } from '../utils/colors';
import HomeStack from './HomeStack';
import ResourceStack from './ResourceStack';
import FavouriteStack from './FavouriteStack';
import SupportStack from './SupportStack';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: verticalScale(70),
        },

        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.white,
        tabBarItemStyle: {
          marginTop: verticalScale(10),
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ height: verticalScale(27), width: horizontalScale(25) }}
              tintColor={color}
              source={require('../assets/icons/home.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ResourecsTab"
        component={ResourceStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              tintColor={color}
              style={{ height: verticalScale(29), width: horizontalScale(25) }}
              source={require('../assets/icons/resources.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavouriteStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              tintColor={color}
              style={{ height: verticalScale(28), width: horizontalScale(28) }}
              source={require('../assets/icons/star.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support&HelpTab"
        component={SupportStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              tintColor={color}
              style={{ height: verticalScale(32), width: horizontalScale(31) }}
              source={require('../assets/icons/support.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
