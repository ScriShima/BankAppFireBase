import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react-native';
import {Screen} from 'react-native-screens';
import {ScreensOptions} from '../common/functions';
import {WelcomeScreen} from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const Screens = ScreensOptions;

const AuthStack = () => {
  <NavigationContainer>
    <Stack.Navigator>
      {Screens.map(screen => (
        <Stack.Screen {...screen} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>;
};

export default AuthStack;
