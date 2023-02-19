import React from 'react';
import {useAuth} from '../hooks/useAuth';
import Tab from '../navigation/Tab';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthStack from '../navigation/authStack';

export const RootNavigation = () => {
  const {user} = useAuth();
  return user ? <Tab /> : <AuthStack />;
};
