import { View, Text } from 'react-native';
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
import { verticalScale } from '../../helper/Scaling';

const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const signUp = () => {
    navigation.navigate('SetUp');
  };
  const { control, handleSubmit } = useForm();
  return (
    <Layout>
      <AuthHeader text="Create Account" style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Let's Start!</Text>
        <View style={styles.inputContainer}>
          <InputField
            name="Full Name"
            control={control}
            placeholder="example word"
            placeholderTextColor={colors.black1}
            rules={{
              required: 'FullName is requried',
              minLength: {
                value: 6,
                message: 'FullName is more than 6 letter',
              },
            }}
            inputHeaderText="Full Name"
          />
          <InputField
            name="Email"
            control={control}
            placeholder="example@gmail.com"
            placeholderTextColor={colors.black1}
            rules={{
              required: 'Email is requried',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Invalid email',
              },
            }}
            inputHeaderText="Email"
          />
          <InputField
            name="Password"
            control={control}
            placeholder="enter Password"
            placeholderTextColor={colors.black1}
            eyeIcon
            rules={{
              required: 'Password is requried',
              minLength: {
                value: 8,
                message: 'Password is greater then 8 letter',
              },
            }}
            inputHeaderText="Password"
          />
          <InputField
            name="Confirm Password"
            control={control}
            placeholder="Renter Password"
            eyeIcon
            placeholderTextColor={colors.black1}
            rules={{
              required: 'Password is requried',
              minLength: {
                value: 8,
                message: 'Both password is same',
              },
            }}
            inputHeaderText="Confirm Password"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>By continuing, You agree to</Text>
          <Text style={styles.highlightText}>
            Terms of Use <Text style={styles.text}>and </Text>Privacy Policy
          </Text>
        </View>
        <PrimaryButton
          text="Sign Up"
          onPress={handleSubmit(signUp)}
          style={styles.button}
        />
        <View style={styles.footerContainer}>
          <FooterLogoContainer />
          <FooterText
            text="Already have an account?"
            buttonText=" Log in"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default SignUpScreen;
