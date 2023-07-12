import React from 'react';

import { ButtonStyled, Text } from './styles';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

/**
 * A stylized button for the application
 * @param label     The label of the button
 * @param disabled  The boolean to disable the button
 * @param onClick   The function to be called when the button is pressed
 */

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, disabled, onClick } = props;

  const handlePress = () => {
    if (!disabled) onClick();
  };

  return (
    <ButtonStyled onPress={handlePress} disabled={disabled} isDisabled={disabled}>
      <Text>{label}</Text>
    </ButtonStyled>
  );
};

export { Button };
