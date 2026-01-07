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
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="SetUp" component={SetUpScreen} />

      <Stack.Screen name="Age" component={AgeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
