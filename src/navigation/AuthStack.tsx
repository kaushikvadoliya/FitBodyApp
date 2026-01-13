import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import SetUpScreen from '../screens/SetUpScreen';
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen';
import EnterOtpScreen from '../screens/EnterOtpScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import GenderScreen from '../screens/GenderScreen';
import AgeScreen from '../screens/AgeScreen';
import WeightScreen from '../screens/WeightScreen';
import HeightScreen from '../screens/HeightScreen';
import GoalScreen from '../screens/GoalScreen';
import PhysicalActivityLevelScreen from '../screens/PhysicalActivityLevelScreen';
import YourProfileScreen from '../screens/YourProfileScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="ForgottenPassword"
        component={ForgottenPasswordScreen}
      />
      <Stack.Screen name="EnterOtp" component={EnterOtpScreen} />
      <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
      <Stack.Screen name="SetUp" component={SetUpScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Age" component={AgeScreen} />
      <Stack.Screen name="Weight" component={WeightScreen} />
      <Stack.Screen name="Height" component={HeightScreen} />
      <Stack.Screen name="Goal" component={GoalScreen} />
      <Stack.Screen
        name="PhysicalActivityLevel"
        component={PhysicalActivityLevelScreen}
      />
      <Stack.Screen name="YourProfile" component={YourProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
