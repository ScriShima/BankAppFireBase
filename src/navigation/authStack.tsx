import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react-native';
import SignUp from '../screens/SignUpScreen';
//import {ScreensOptions} from '../common/functions';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

//const screens = ScreensOptions;

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
