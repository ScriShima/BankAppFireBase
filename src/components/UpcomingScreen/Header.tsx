import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../../common/Constants';
import {useAuth, useAuthTest} from '../../hooks/useAuth';

const Header = () => {
  const {user} = useAuthTest();

  console.log();
  return (
    <View
      style={{
        marginTop: 30,
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
          Hi Guest
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
              source={{uri: user.avatar}}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
