import React from 'react';
import {View} from 'react-native';
import Balance from './src/components/Balance';
import Cards from './src/components/Cards';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from './Constants';

function App(): JSX.Element {
  return (
    <LinearGradient
      style={{height: '100%'}}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={[COLORS.bg_grad_from, COLORS.bg_grad_to]}>
      <View style={{}}>
        <Header />
        <Cards />
        <Balance />
        <Footer />
      </View>
    </LinearGradient>
  );
}

export default App;
