import React from 'react';
import {View} from 'react-native';
import Balance from '../components/UpcomingScreen/Balance';
import Cards from '../components/UpcomingScreen/Cards';
import Header from '../components/UpcomingScreen/Header';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../common/Constants';
import UpcomingPayments from '../components/UpcomingScreen/UpcomingPayments';

const PaymentInfoScreen = () => {
  return (
    <LinearGradient
      style={{height: '100%'}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.5}}
      // useAngle={true}
      // angle={135}
      // angleCenter={{x: 0.5, y: 0.5}}
      colors={[COLORS.bg_grad_from, COLORS.bg_grad_to]}>
      <View style={{}}>
        <Header />
        <Cards />
        <Balance />
        <UpcomingPayments />
      </View>
    </LinearGradient>
  );
};

export default PaymentInfoScreen;
