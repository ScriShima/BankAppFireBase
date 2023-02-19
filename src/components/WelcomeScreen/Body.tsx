import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {COLORS, SIZES} from '../../common/Constants';
import {color} from 'react-native-reanimated';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Tabs from '../../navigation/Tab';

const Body = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewCard}>
        <Pressable style={styles.Button}>
          <Text
            style={{color: COLORS.white, fontSize: SIZES.h2}}
            onPress={() => navigation.navigate('PaymentInfoScreen')}>
            Sign Up
          </Text>
        </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.accent,
  },
});

export default Body;
