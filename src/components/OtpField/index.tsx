import React from 'react';
import { Text } from 'react-native';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { View } from 'react-native';
import styles from './style';
import { OtpInput } from 'react-native-otp-entry';
import { colors } from '../../utils/colors';
import { normalize } from '../../helper/DynamicSize';

type Props = {
  name: string;
  control: Control<any>;
  rules: RegisterOptions;
  otpHeaderText: string;
};

const OtpField = ({ control, name, otpHeaderText, rules }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        console.log('value is ', value);
        return (
          <>
            <View style={styles.container}>
              <Text style={styles.inputHeaderText}>{otpHeaderText}</Text>
              <OtpInput
                numberOfDigits={4}
                placeholder="*"
                type="numeric"
                focusColor={colors.purple}
                onTextChange={onChange}
                theme={{
                  pinCodeTextStyle: {
                    fontSize: normalize(30),
                  },
                  pinCodeContainerStyle: {
                    backgroundColor: '#f5f5f5',
                    borderWidth: 2,
                  },
                  focusStickStyle: {
                    borderBottomColor: colors.black1,
                    borderBottomWidth: 30,
                  },
                  containerStyle: {
                    width: 220,
                    alignSelf: 'center',
                  },
                }}
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
          </>
        );
      }}
    />
  );
};

export default OtpField;
