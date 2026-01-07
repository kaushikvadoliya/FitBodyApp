import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import InputField from '../../components/InputField';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const ForgottenPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const { control, handleSubmit } = useForm();

  const emailCheck = () => {
    navigation.navigate('EnterOtp');
  };

  return (
    <Layout>
      <AuthHeader text="Forgotten Password" style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.text}>
          Enter your registered email. We’ll send a verification code to your
          inbox to help you sign in safely and quickly.
        </Text>
        <View style={styles.inputContainer}>
          <InputField
            name="Enter Your email address"
            control={control}
            placeholder="example@gmail.com"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Invalid email',
              },
            }}
            inputHeaderText="Enter Your email address"
          />
        </View>
        <PrimaryButton
          text="Send Otp"
          style={styles.button}
          onPress={handleSubmit(emailCheck)}
        />
      </View>
    </Layout>
  );
};

export default ForgottenPasswordScreen;
