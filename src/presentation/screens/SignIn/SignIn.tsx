import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Text>SignIn</Text>
    </Container>
  );
};

export { SignIn };
