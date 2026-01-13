import { View, Text } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import styles from './style';
import InputField from '../../components/InputField';
import { colors } from '../../utils/colors';

const SetPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const { control, handleSubmit } = useForm();

  const verifyOtp = () => {
    navigation.navigate('SetUp');
  };

  return (
    <Layout>
      <AuthHeader text="Set Password" style={styles.header} />
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          Create a new password below. Once confirmed, you’ll be able to log in
          and access your account securely again.
        </Text>
        <View style={styles.inputContainer}>
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
            eyeIcon
            control={control}
            placeholder="Renter Password"
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
        <PrimaryButton
          transpharent
          text="Reset Password"
          style={styles.button}
          onPress={handleSubmit(verifyOtp)}
        />
      </View>
    </Layout>
  );
};

export default SetPasswordScreen;
