import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../common/Constants';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const auth = getAuth();

const SignUp = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: SIZES.h1}}>Регистрации нету</Text>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.black,
          width: 100,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Welcome');
        }}>
        <Text style={{color: COLORS.white}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
