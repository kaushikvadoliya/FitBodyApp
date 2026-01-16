import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { Text, TouchableOpacity, View } from 'react-native';
import InputField from '../../components/InputField';
import { useForm } from 'react-hook-form';
import { colors } from '../../utils/colors';
import styles from './style';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const PasswordSettingScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const changePassword = () => {
    navigation.goBack();
  };
  return (
    <Layout>
      <Header backButton text="Password Settings" />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <InputField
            control={control}
            name="curret password"
            inputHeaderText="Current Password"
            placeholderTextColor={colors.placeholderColor}
            textColor={colors.purple}
            rules={{
              required: 'Current Password is required',
            }}
            placeholder="***********"
            eyeIcon
          />
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContaier}>
          <InputField
            control={control}
            name="new password"
            inputHeaderText="New Password"
            placeholderTextColor={colors.placeholderColor}
            textColor={colors.purple}
            rules={{
              required: 'New Password is required',
              minLength: {
                value: 8,
                message: 'Password is more than 8 character',
              },
            }}
            eyeIcon
            placeholder="***********"
          />
          <InputField
            control={control}
            name="confirm new password"
            inputHeaderText="Confirm New Password"
            placeholderTextColor={colors.placeholderColor}
            textColor={colors.purple}
            rules={{
              required: 'New Password is required',
              minLength: {
                value: 8,
                message: 'Password is more than 8 character',
              },
            }}
            placeholder="***********"
            eyeIcon
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text="Change Passwrod"
            onPress={handleSubmit(changePassword)}
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default PasswordSettingScreen;
