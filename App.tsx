import React from 'react';
import {View} from 'react-native';
import Balance from './src/components/Balance';
import Cards from './src/components/Cards';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from './Constants';
import UpcomingPayments from './src/components/UpcomingPayments';

function App(): JSX.Element {
  return (
    <LinearGradient
      style={{height: '100%'}}
      // start={{x: 0, y: 0}}
      // end={{x: 0, y: 0.5}}
      useAngle={true}
      angle={135}
      angleCenter={{x: 0.5, y: 0.5}}
      colors={[COLORS.bg_grad_from, COLORS.bg_grad_to]}>
      <View style={{}}>
        <Header />
        <Cards />
        <Balance />
        <UpcomingPayments />
        <Footer />
      </View>
    </LinearGradient>
  );
}

export default App;
