import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #2c2b34;
`;

export const TextContainer = styled.View`
  padding-horizontal: 24px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Header = styled.View`
  height: 100px;
  background-color: #fff;
  padding: 60px 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChevronLeft = styled.Image`
  width: 30px;
  height: 30px;
`;

export const CarBox = styled.View`
  background-color: #a8a8b3;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 24px;
  padding: 16px;
`;

export const CarName = styled.Text`
  color: #2c2b34;
  font-size: 16px;
  font-weight: 700;
`;
