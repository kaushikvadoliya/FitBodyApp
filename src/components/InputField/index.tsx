import React, { useState } from 'react';
import { StyleProp, Text, TextInput, ViewStyle } from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import styles from './style';

type Props = {
  name: string;
  control: Control<any>;
  rules: RegisterOptions;
  inputHeaderText: string;
} & TextInputProps;

const InputField = ({
  control,
  name,
  inputHeaderText,
  rules,
  ...rest
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <View style={styles.container}>
            <Text style={styles.inputHeaderText}>{inputHeaderText}</Text>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              {...rest}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        </>
      )}
    />
  );
};

export default InputField;
