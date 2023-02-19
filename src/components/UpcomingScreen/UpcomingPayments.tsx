import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from '../../common/Constants';

const UpcomingPayments = () => {
  return (
    <View style={{marginTop: 10, marginStart: 20, marginEnd: 20}}>
      <Text style={{color: COLORS.gray, fontSize: 18}}>Upcoming payments</Text>

      {/* View для зарплаты и paypal  */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        {/*View для заплаты*/}
        <LinearGradient
          style={{height: 200, width: 170, borderRadius: 35}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[COLORS.dark_gray, COLORS.black]}>
          <View
            style={{
              borderRadius: 35,
              height: 100,
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../assets/salary.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                paddingTop: 20,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Salary
            </Text>
            <Text
              style={{
                paddingTop: 5,
                color: COLORS.gray,
                fontSize: SIZES.h4,
              }}>
              Belong Interactive
            </Text>

            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: 15,
              }}>
              +2000$
            </Text>
          </View>
        </LinearGradient>
        {/*View для paypal*/}
        <LinearGradient
          style={{height: 200, width: 170, borderRadius: 35}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[COLORS.dark_gray, COLORS.black]}>
          <View
            style={{
              borderRadius: 35,
              height: 100,
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../assets/paypal.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                paddingTop: 20,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              PayPal
            </Text>
            <Text
              style={{
                paddingTop: 5,
                color: COLORS.gray,
                fontSize: SIZES.h4,
              }}>
              Freelance payments
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: 15,
              }}>
              +45,00$
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default UpcomingPayments;
