import React from 'react';
import PaymentInfoScreen from './src/screens/PaymentInfoScreen';
import TabBottom from './src/navigation/Tab';
//import {useAuth} from './src/utils/useAuth';
import {Button, View, TouchableHighlight, Text} from 'react-native';
import {COLORS} from './src/common/Constants';
import SignUpScreen from './src/screens/SignUpScreen';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import Header from './src/components/WelcomeScreen/Header';

function App(): JSX.Element {
  // const {isLoggedIn} = useAuth();

  return (
    <>
      {/* <TabBottom /> */}
      <WelcomeScreen />
    </>
  );
}

export default App;
