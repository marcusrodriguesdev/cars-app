import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StatusBar, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../context/userContext';
import { CarsService } from '../../../services/CarsService';
import { GetMarksResponse } from '../../../services/CarsService/ICarsService';
import { Input } from '../../components';
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

const backIcon = require('../../assets/back-icon.png');
const chevronRight = require('../../assets/chevron-right.png');

const Home: React.FC = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState<string>('');
  const [cars, setCars] = useState<GetMarksResponse[] | null>(null);
  const [searchText, setSearchText] = useState<string>('');

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

  const handleSelectModel = (model: string, name: string) => {
    navigation.navigate('Model', { model, name });
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
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

  const filteredCars = cars?.filter((car) =>
    car.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: { item: GetMarksResponse }) => (
    <CarBox onPress={() => handleSelectModel(item.codigo, item.nome)}>
      <CarName>{item.nome}</CarName>
      <ChevronRight source={chevronRight} />
    </CarBox>
  );

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
        <Input
          onChangeText={handleSearch}
          placeholder="Digite uma marca desejeda"
          secureText={false}
          value={searchText}
        />
      </TextContainer>
      <FlatList data={filteredCars} renderItem={renderItem} keyExtractor={(item) => item.codigo} />
    </Container>
  );
};

export { Home };
