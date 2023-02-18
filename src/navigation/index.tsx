import React from 'react';
import {View} from 'react-native';
import {useAuth} from '../hooks/useAuth';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';
import Tab from '../navigation/Tab';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthStack from '../navigation/authStack';

export const RootNavigation = () => {
  const {user} = useAuth();

  return user ? <Tab /> : <AuthStack />;
};
