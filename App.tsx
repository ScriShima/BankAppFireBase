import React from 'react';
import './src/config/firebase';
import 'react-native-gesture-handler';
//import {useAuth} from './src/utils/useAuth';

import {RootNavigation} from './src/navigation/index';
import TabBottom from './src/navigation/Tab';

function App(): JSX.Element {
  // const {isLoggedIn} = useAuth();

  return (
    <>
      <RootNavigation />
    </>
  );
}

export default App;
