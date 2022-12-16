import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { PreparingOrderScreenNavProps } from '../types/navigation';

type Props = {} & PreparingOrderScreenNavProps;

const PreparingOrderScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <SafeAreaView className="bg-primary flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/delivery-pickup.gif')}
        animation={'slideInUp'}
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation={'slideInUp'}
        className="text-lg my-10 text-white font-bold text-center"
        iterationCount={1}
      >
        Il risotrante sta accettando il tuo ordine!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
