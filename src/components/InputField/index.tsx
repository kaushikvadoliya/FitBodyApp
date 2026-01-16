import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import styles from './style';
import { colors } from '../../utils/colors';

type Props = {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  inputHeaderText: string;
  eyeIcon?: boolean;
  textColor?: string;
} & TextInputProps;

const InputField = ({
  control,
  name,
  eyeIcon,
  textColor,
  inputHeaderText,
  rules,
  ...rest
}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  if (eyeIcon) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View style={styles.container}>
              <Text
                style={[
                  styles.inputHeaderText,
                  { color: textColor ? textColor : colors.black1 },
                ]}
              >
                {inputHeaderText}
              </Text>
              <View style={styles.eyeInputContainer}>
                <TextInput
                  style={styles.withEyeInput}
                  value={value}
                  secureTextEntry={show ? false : true}
                  onChangeText={onChange}
                  {...rest}
                />
                <TouchableOpacity onPress={() => setShow(!show)}>
                  {show ? (
                    <Image
                      source={require('../../assets/icons/hidden.png')}
                      style={styles.eyeIcon}
                      tintColor={colors.purple}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/icons/eye.png')}
                      style={styles.eyeIcon}
                      tintColor={colors.purple}
                    />
                  )}
                </TouchableOpacity>
              </View>

              {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
          </>
        )}
      />
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <View style={styles.container}>
            <Text
              style={[
                styles.inputHeaderText,
                { color: textColor ? textColor : colors.black1 },
              ]}
            >
              {inputHeaderText}
            </Text>
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
