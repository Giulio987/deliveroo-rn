import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = (props: Props) => {
  return (
    <View>
      <Text>DishRow</Text>
    </View>
  );
};

export default DishRow;
