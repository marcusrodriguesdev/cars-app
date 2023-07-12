import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

const RedirectUser: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        return navigation.navigate('Home' as never);
      } else {
        return navigation.navigate('SignIn' as never);
      }
    };

    checkToken();
  }, []);

  return null;
};

export { RedirectUser };
