import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { HomeNavProps } from '../types/navigation';

const Home = ({ navigation }: HomeNavProps) => {
  //Hide the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
