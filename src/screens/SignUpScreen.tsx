import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../common/Constants';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const auth = getAuth();

const SignUp = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.accent}}>
      <Text>Test</Text>
    </View>
  );
};

export default SignUp;
