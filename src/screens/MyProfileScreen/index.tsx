import { View, Text, Image } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import UserInfoTab from '../../components/UserInfoTab';
import styles from './style';
import Layout from '../../components/Layout';
import InputField from '../../components/InputField';
import { useForm } from 'react-hook-form';
import { colors } from '../../utils/colors';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const MyProfileScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const chechDetails = () => {
    navigation.goBack();
  };
  return (
    <Layout scrolled>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header
            backButton
            text="My Profile"
            colorWhite
            style={styles.header}
          />
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.jpg')}
          />
          <Text style={styles.name}>Madison Smith</Text>
          <Text style={styles.email}>madisons@example.com</Text>
          <Text style={styles.birthText}>
            Birthday: <Text style={styles.birthDate}>April 1st</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <UserInfoTab height={165} weight="75 Kg" year={28} />
        </View>
        <View style={styles.inputCotainer}>
          <InputField
            inputHeaderText="Full name"
            name="fullname"
            placeholder="madison@gmail.com"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            keyboardType="default"
            rules={{
              required: 'Fullname is required',
              minLength: {
                value: 8,
                message: 'full name length is greater than 8',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Email"
            name="email"
            keyboardType="email-address"
            placeholder="madison@gmail.com"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Invalid email',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Mobile Number"
            name="phone"
            keyboardType="number-pad"
            placeholder="+123 567 89000"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            rules={{
              required: 'Mobile number is required',
              minLength: {
                value: 10,
                message: 'mobile number must be 10 digit',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Date of Birth"
            name="birthDate"
            placeholder="01 / 04 / 199X"
            keyboardType="number-pad"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            rules={{
              required: 'BirthDate is required',
              minLength: {
                value: 10,
                message: 'enter valid birth date',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Weight"
            name="weight"
            placeholder="75 Kg"
            keyboardType="name-phone-pad"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            rules={{
              required: 'Weight is required',
              minLength: {
                value: 2,
                message: 'Invalid Weight',
              },
            }}
            textColor={colors.purple}
          />
          <InputField
            inputHeaderText="Height"
            name="height"
            placeholder="165 CM"
            keyboardType="name-phone-pad"
            control={control}
            placeholderTextColor={colors.placeholderColor}
            rules={{
              required: 'Height is required',
              minLength: {
                value: 2,
                message: 'Invalid Height',
              },
            }}
            textColor={colors.purple}
          />
        </View>

        <PrimaryButton
          text="Update Profile"
          onPress={handleSubmit(chechDetails)}
          style={styles.button}
        />
      </View>
    </Layout>
  );
};

export default MyProfileScreen;
