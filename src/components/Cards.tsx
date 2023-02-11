import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from '../../Constants';
import {UseAuth} from '../UseAuth';
const cards = [
  {
    id: '1',
    number: '1469 4000 3115 6495',
    type: 'Mastercards',
    typeIncon: require('../assets/mastercard.png'),
    balance: 92510,
  },
  // {
  //   id: '2',
  //   number: '2469 4000 3115 6495',
  //   type: 'Visa',
  //   typeIncon: require('../assets/visa.png'),
  //   balance: 92510,
  // },
  // {
  //   id: '3',
  //   number: '3469 4000 3115 6495',
  //   type: 'Maestro',
  //   typeIncon: require('../assets/maestro.png'),
  //   balance: 92510,
  // },
];

const Cards = () => {
  const {user} = UseAuth();
  return (
    <View style={{padding: 15}}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={[COLORS.bg_card_from, COLORS.bg_card_to]}
        style={{borderRadius: 30, width: '100%', marginTop: 20}}>
        {cards.map(card => (
          <View
            key={card.id}
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              paddingStart: 25,
              paddingEnd: 25,
              borderRadius: 20,
            }}>
            <Image
              source={require('../assets/image.png')}
              style={{width: 35, height: 35}}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.cardNunberSize,
                fontWeight: 'bold',
                paddingTop: 20,
              }}>
              {card.number}
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 10,
                  }}>
                  CARD HOLDER
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}>
                  {user.name}
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Image
                  style={{height: 65, width: 65}}
                  source={card.typeIncon}
                />
                <Text style={{color: COLORS.white}}>{card.type}</Text>
              </View>
            </View>
          </View>
        ))}
      </LinearGradient>
    </View>
  );
};

export default Cards;
