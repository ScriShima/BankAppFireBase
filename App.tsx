import React from 'react';
import PaymentInfoScreen from './src/pages/PaymentInfoScreen';
import TabBottom from './src/components/Tab';
//import {useAuth} from './src/utils/useAuth';
import {Button, View, TouchableHighlight, Text} from 'react-native';
import {login} from './src/utils/firebase';
import {COLORS} from './Constants';

function App(): JSX.Element {
  // const {isLoggedIn} = useAuth();

  return (
    // <>
    //   {isLoggedIn ? (
    //     <>
    //       <TabBottom />
    //     </>
    //   ) : (
    //     <View style={{backgroundColor: COLORS.black, flex: 1, height: '100%'}}>
    //       <Button
    //         title="Sign in"
    //         color={'#fff'}
    //         onPress={async () => await login()}></Button>
    //     </View>
    //   )}
    // </>
    <>
      <TabBottom />
    </>
  );
}

export default App;
