import styled from 'styled-components/native';

interface ButtonProps {
  isDisabled?: boolean;
}
export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  height: 54px;
  justify-content: center;
  opacity: ${props => props.isDisabled ? 0.5 : 1};
`;

export const Text = styled.Text`
  color: #2c2b34;
  font-size: 16px;
  font-weight: 700;
`;
