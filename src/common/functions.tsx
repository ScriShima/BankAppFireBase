import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
const adjust = (color: string, amount: number) => {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, color =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2),
      )
  );
};

export default adjust;

export const ScreensOptions = [
  {
    id: 1,
    name: 'Welcome',
    component: WelcomeScreen,
  },
];
