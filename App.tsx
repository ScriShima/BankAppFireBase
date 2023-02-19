import React from 'react';
import './src/config/firebase';
import 'react-native-gesture-handler';
import PaymentInfoScreen from './src/screens/PaymentInfoScreen';
import TabBottom from './src/navigation/Tab';
//import {useAuth} from './src/utils/useAuth';
import {Button, View, TouchableHighlight, Text} from 'react-native';
import {COLORS} from './src/common/Constants';
import SignUpScreen from './src/screens/SignUpScreen';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import Header from './src/components/WelcomeScreen/Header';
import {RootNavigation} from './src/navigation';

function App(): JSX.Element {
  // const {isLoggedIn} = useAuth();

  return (
    <>
      {/* <TabBottom /> */}
      <RootNavigation />
    </>
  );
}

export default App;
