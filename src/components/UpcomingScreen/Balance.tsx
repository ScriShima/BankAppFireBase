import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, SIZES} from '../../Constants';

const Balance = () => {
  const card = {balance: 92510};
  return (
    <View style={{marginStart: 20}}>
      <Text
        style={{
          color: COLORS.gray,
          fontSize: SIZES.h2,
          opacity: 0.5,
        }}>
        Balance
      </Text>
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.h1,
          fontWeight: 'bold',
        }}>
        ${card.balance.toLocaleString()}
      </Text>
    </View>
  );
};

export default Balance;
