import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react-native';
import {ScreensOptions} from '../common/functions';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';

const Stack = createStackNavigator();

const Screens = ScreensOptions;

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Welcome">
        {Screens.map(Screen => (
          <Stack.Screen {...Screen} />
        ))}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     {Screens.map(screen => (
  //       <Stack.Screen {...screen} />
  //     ))}
  //   </Stack.Navigator>
  // </NavigationContainer>
};

export default AuthStack;
