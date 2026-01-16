import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import InputField from '../../components/InputField';
import { useForm } from 'react-hook-form';
import { colors } from '../../utils/colors';
import PrimaryButton from '../../components/PrimaryButton';
import FooterLogoContainer from '../../components/FooterLogoContainer';
import FooterText from '../../components/FooterText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const insets = useSafeAreaInsets();

  const login = () => {
    navigation.navigate('SetUp');
  };

  return (
    <Layout>
      <AuthHeader text="Log In" style={[styles.header]} />
      <View style={[styles.mainContainer, { paddingBottom: insets.bottom }]}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.text}>
          Welcome back to FitBody. Sign in to sync your fitness data, view your
          daily training plan, and continue your journey toward a stronger you.
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <InputField
              inputHeaderText="Username or email"
              name="email"
              placeholder="example@gmail.com"
              control={control}
              placeholderTextColor={colors.placeholderColor}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: 'Invalid email',
                },
              }}
            />
            <InputField
              inputHeaderText="Password"
              name="password"
              placeholder="enter secure password"
              control={control}
              placeholderTextColor={colors.placeholderColor}
              eyeIcon
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be greater than 8 letter',
                },
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('ForgottenPassword')}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <PrimaryButton
          text="Log In"
          transpharent
          onPress={handleSubmit(login)}
          style={styles.button}
        />
        <View style={styles.footerContainer}>
          <FooterLogoContainer />
          <FooterText
            text="Don't have an account?"
            buttonText=" Sign Up"
            onPress={() => navigation.replace('SignUp')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
