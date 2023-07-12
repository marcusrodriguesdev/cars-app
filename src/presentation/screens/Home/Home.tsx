import React, { useContext, useEffect, useState } from 'react';
import {
  BackIcon,
  CarBox,
  CarName,
  ChevronRight,
  Container,
  Header,
  Subtitle,
  TextContainer,
  Title,
} from './styles';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../context/userContext';
import { CarsService } from '../../../services/CarsService';
import { GetMarksResponse } from '../../../services/CarsService/ICarsService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const backIcon = require('../../assets/back-icon.png');
const chevronRight = require('../../assets/chevron-right.png');

const Home: React.FC = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState<string>('');
  const [cars, setCars] = useState<GetMarksResponse[] | null>(null);

  const handleExitApp = async () => {
    await AsyncStorage.removeItem('userName');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SignIn',
        },
      ],
    });
  };

  const handleSelectModel = (model: string) => {
    navigation.navigate('Model', { model });
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const storedUserName = await AsyncStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      } else if (user) {
        setUserName(user.name);
      }
    };

    getUserInfo();
  }, [user]);

  useEffect(() => {
    const getMarks = async () => {
      const response: any = await new CarsService().getMarks();
      setCars(response);
    };

    getMarks();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <Text />
        <TouchableOpacity onPress={handleExitApp}>
          <BackIcon source={backIcon} />
        </TouchableOpacity>
      </Header>
      <TextContainer>
        <Title>Bem vindo, {userName || 'john'}!</Title>

        <Subtitle>Aqui está a lista das melhores marcas de carro do mundo!</Subtitle>
      </TextContainer>
      {cars?.map((car) => (
        <CarBox onPress={() => handleSelectModel(car.codigo)}>
          <CarName>{car.nome}</CarName>
          <ChevronRight source={chevronRight} />
        </CarBox>
      ))}
    </Container>
  );
};

export { Home };
