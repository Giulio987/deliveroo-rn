import { View, Text } from 'react-native';
import React from 'react';
import { BasketNavProps } from '../types/navigation';

type Props = {};

const BasketScreen = (props: Props & BasketNavProps) => {
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
