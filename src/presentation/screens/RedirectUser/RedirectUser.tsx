import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

const RedirectUser: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkName = async () => {
      const name = await AsyncStorage.getItem('userName');

      if (name) {
        return navigation.navigate('Home' as never);
      } else {
        return navigation.navigate('SignIn' as never);
      }
    };

    checkName();
  }, []);

  return null;
};

export { RedirectUser };
