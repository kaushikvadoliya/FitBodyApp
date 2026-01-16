import { TextInput, TextInputProps } from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type VaeientType = 'lg' | 'sm';

type SearchBarProps = {
  varient: VaeientType;
  value?: string;
} & TextInputProps;

const SearchBar = ({ varient, value, ...rest }: SearchBarProps) => {
  return (
    <TextInput
      value={value}
      placeholder="Search"
      style={varient === 'sm' ? styles.smallInput : styles.largeInput}
      placeholderTextColor={colors.grey}
      {...rest}
    />
  );
};

export default SearchBar;
