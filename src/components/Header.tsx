import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../../Constants';
import {UseAuth} from '../UseAuth';

const Header = () => {
  const {user} = UseAuth();
  return (
    <View
      style={{
        marginTop: 60,
        marginStart: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h1,
            fontWeight: 'bold',
          }}>
          Hi {user?.name}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: SIZES.h4,
          }}>
          Welcome back
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => {}}>
          <View style={{marginEnd: 25}}>
            <Image
              source={{uri: user?.avatar}}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
