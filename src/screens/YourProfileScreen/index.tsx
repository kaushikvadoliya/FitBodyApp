import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import AuthHeader from '../../components/AuthHeader';
import styles from './style';
import InputField from '../../components/InputField';
import { useForm } from 'react-hook-form';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/navigationType';
import PrimaryButton from '../../components/PrimaryButton';

const YourProfileScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const checkDetails = () => {
    navigation.navigate('AppTab');
  };
  return (
    <Layout scrolled>
      <AuthHeader backText />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Fill Your Profile</Text>
        <Text style={styles.text}>
          Enter your name and contact info to finalize your account, allowing us
          to send personalized insights and training updates.
        </Text>
        <View style={styles.profileContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/profile.jpg')}
          />
          <TouchableOpacity>
            <Image
              style={styles.pencilIcon}
              source={require('../../assets/icons/pencil.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <InputField
            inputHeaderText="Full name"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            name="fullName"
            placeholder="Madison Smith"
            keyboardType="name-phone-pad"
            rules={{
              required: 'FullName is required',
              minLength: {
                value: 8,
                message: 'fullName is more then 8 letter',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Nickname"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            keyboardType="name-phone-pad"
            name="NickName"
            placeholder="Madison"
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Email"
            control={control}
            keyboardType="email-address"
            placeholderTextColor={colors.placeholderColor}
            name="Email"
            placeholder="example@gmail.com"
            rules={{
              required: 'email is required',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Invalid email',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Mobile Number"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            name="phone"
            keyboardType="number-pad"
            placeholder="+123 567 89000"
            rules={{
              required: 'Phone Number is required',
              minLength: {
                value: 10,
                message: 'Invalid phone number',
              },
            }}
            textColor={colors.purple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={handleSubmit(checkDetails)}
            text="Start"
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default YourProfileScreen;
