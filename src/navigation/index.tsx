import React from 'react';
import {useAuth} from '../hooks/useAuth';
import Tab from '../navigation/Tab';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthStack from '../navigation/authStack';
import {View} from 'react-native';
import TabBottom from '../navigation/Tab';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';

export const RootNavigation = () => {
  const {user} = useAuth();
  return user ? <Tab /> : <AuthStack />;
};
