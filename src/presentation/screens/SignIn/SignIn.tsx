import React from 'react';
import { Keyboard, StatusBar } from 'react-native';
import { ButtonContainer, Container, ImageStyled, InputContainer, Subtitle, Title } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '../../components';
import { SignInFormData } from '../../types/signIn';

const logo = require('../../assets/carHome.png');

const SignIn: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    // Processar os dados do formulário
    console.log(data);
  };

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <StatusBar barStyle="light-content" />
      <ImageStyled source={logo} />
      <Title>Bem-vindo ao CarList</Title>
      <Subtitle>Explore seu mundo automotivo!</Subtitle>
      <InputContainer>
        <Controller
          control={control}
          name="username"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Escreva seu nome de usuário"
              value={value}
              onChangeText={onChange}
              secureText={false}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Escreva sua senha"
              value={value}
              onChangeText={onChange}
              secureText
            />
          )}
          rules={{ required: true }}
        />
      </InputContainer>
      <ButtonContainer>
        <Button label="Entrar" onClick={handleSubmit(onSubmit)} disabled={!formState.isValid} />
      </ButtonContainer>
    </Container>
  );
};

export { SignIn };
