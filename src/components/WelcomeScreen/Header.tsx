import React, {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../common/Constants';
import {BlurView} from '@react-native-community/blur';

const Header = () => {
  return (
    <View style={{marginStart: 30, marginEnd: 30, marginTop: 30}}>
      <Text
        style={{color: COLORS.white, fontSize: SIZES.h1, fontWeight: 'bold'}}>
        Welcome
      </Text>
      <Text style={{color: COLORS.white, fontSize: SIZES.h2, marginTop: 10}}>
        Short and clear
      </Text>
      <Text style={{color: COLORS.white, fontSize: SIZES.h2}}>
        loan for a month interest for a year
      </Text>
    </View>
  );
};

export default Header;
