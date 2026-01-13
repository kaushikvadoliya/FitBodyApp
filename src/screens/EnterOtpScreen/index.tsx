import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import { useForm } from 'react-hook-form';
import OtpField from '../../components/OtpField';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';

const EnterOtpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const { control, handleSubmit } = useForm();

  const verifyOtp = () => {
    navigation.navigate('SetPassword');
  };

  return (
    <Layout>
      <AuthHeader text="Otp" style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Enter Otp</Text>
        <Text style={styles.text}>
          Check your mail for a secure code. Enter those digits below to verify
          your identity and continue with your password reset.
        </Text>
        <View style={styles.inputContainer}>
          <OtpField
            name="otp"
            control={control}
            otpHeaderText="Enter otp here"
            rules={{
              required: 'Otp is required',
              minLength: {
                value: 4,
                message: 'Invalid Otp',
              },
            }}
          />
        </View>
        <PrimaryButton
          transpharent
          text="Send Otp"
          style={styles.button}
          onPress={handleSubmit(verifyOtp)}
        />
      </View>
    </Layout>
  );
};

export default EnterOtpScreen;
