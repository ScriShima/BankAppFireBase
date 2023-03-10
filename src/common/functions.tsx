import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Tab from '../navigation/Tab';
import TabBottom from '../navigation/Tab';
import SignUpScreen from '../screens/SignUpScreen';

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
