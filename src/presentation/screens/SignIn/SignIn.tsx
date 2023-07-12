import React, { useContext } from 'react';
import { Alert, Keyboard, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import { SignInFormData } from '../../types/signIn';
import { SignInService } from '../../../services/SignInService';
import { UserContext } from '../../context/userContext';
import { Button, Input } from '../../components';
import { ButtonContainer, Container, ImageStyled, InputContainer, Subtitle, Title } from './styles';

const logo = require('../../assets/carHome.png');

const SignIn: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<SignInFormData>();
  const navigation = useNavigation();
  const { updateUser } = useContext(UserContext);

  const onSubmit = async (data: SignInFormData) => {
    const { username, password } = data;

    const response: any = await new SignInService().signIn(username, password);
    if (response.error) {
      return Alert.alert('Erro', 'Usuário e/ou senha inválido(s).');
    }

    await AsyncStorage.setItem('token', response.user.token);
    updateUser(response.user);

    return navigation.navigate('Home' as never);
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
