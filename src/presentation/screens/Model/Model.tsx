import React, { useEffect, useState } from 'react';
import { CarBox, CarName, ChevronLeft, Container, Header, TextContainer, Title } from './styles';
import { FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { CarsService } from '../../../services/CarsService';
import { useNavigation } from '@react-navigation/native';
import { GetMarksResponse } from '../../../services/CarsService/ICarsService';

const chevronLeft = require('../../assets/chevron-left.png');

const Model: React.FC = ({ route }: any) => {
  const navigation = useNavigation();

  const [models, setModels] = useState<any>(null);

  useEffect(() => {
    const getModels = async () => {
      const response: any = await new CarsService().getModels(route.params.model);
      setModels(response);
    };

    getModels();
  }, []);

  const renderItem = ({ item }: { item: GetMarksResponse }) => (
    <CarBox>
      <CarName>{item.nome}</CarName>
    </CarBox>
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft source={chevronLeft} />
        </TouchableOpacity>
      </Header>
      <TextContainer>
        <Title>Estes são os principais modelos de "{route.params.name}".</Title>
      </TextContainer>
      <FlatList data={models?.modelos} renderItem={renderItem} keyExtractor={(item) => item.codigo} />
    </Container>
  );
};

export { Model };
