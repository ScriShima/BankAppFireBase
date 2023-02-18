import React, {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../common/Constants';
import {BlurView} from '@react-native-community/blur';
import Header from '../components/WelcomeScreen/Header';
import Body from '../components/WelcomeScreen/Body';

export const WelcomeScreen = () => {
  return (
    <LinearGradient
      style={{height: '100%'}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.5}}
      // useAngle={true}
      // angle={135}
      // angleCenter={{x: 0.5, y: 0.5}}
      colors={[COLORS.bg_grad_from, COLORS.bg_grad_to]}>
      <Header />
      <Body />
    </LinearGradient>
  );
};

export default WelcomeScreen;
