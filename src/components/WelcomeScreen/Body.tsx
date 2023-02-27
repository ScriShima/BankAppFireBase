import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS, SIZES} from '../../common/Constants';
import Tabs from '../../navigation/Tab';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {StackScreenProps} from '@react-navigation/stack';

const auth = getAuth();

const Body = ({navigation}: {navigation: any}) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
  });

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: 'Error',
      });
    }
  }

  function Toast() {
    ToastAndroid.show('Test', ToastAndroid.SHORT);
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewCard}>
        <TextInput
          style={styles.InputContainer}
          placeholder="Email"
          value={value.email}
          maxLength={40}
          onChangeText={text => setValue({...value, email: text})}
        />
        <TextInput
          style={styles.InputContainer}
          maxLength={20}
          placeholder="Password"
          cursorColor={COLORS.black}
          onChangeText={text => setValue({...value, password: text})}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[styles.Button, {marginTop: 30}]}
          onPress={signIn}>
          <Text style={{color: COLORS.white, fontSize: SIZES.h2}}>Sign In</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
            alignSelf: 'flex-end',
            marginEnd: 25,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('SignUp')}
          selectable={true}
          selectionColor={COLORS.accent}>
          Don't have an account?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  viewCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.accent,
    height: 300,
    width: 300,
    borderRadius: 20,
    borderWidth: 5,
  },
  Button: {
    backgroundColor: COLORS.bg_grad_from,
    borderRadius: 20,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.accent,
  },
  InputContainer: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    marginTop: 10,
    color: COLORS.black,
  },
});

export default Body;
