import React from 'react';

import { Container, StyledInput } from './styles';

export interface InputProps {
  value: string;
  placeholder: string;
  secureText: boolean;
  disabled?: boolean;
  onChangeText: (text: string) => void;
}

/**
 * A stylized input for the application
 * @param value           The value of the input
 * @param placeholder     The placeholder of the input
 * @param secureText      The boolean to show or hide the password
 * @param disabled        The boolean to disable the input
 * @param onChangeText    The function to be called when the input text is changes
 */

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    value,
    placeholder,
    disabled,
    secureText,
    onChangeText,
  } = props;

  return (
    <Container pointerEvents={disabled ? 'none' : 'box-none'}>
      <StyledInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureText}
        keyboardType="default"
        onChangeText={onChangeText}
        returnKeyType="next"
      />
    </Container>
  );
};

export { Input };
