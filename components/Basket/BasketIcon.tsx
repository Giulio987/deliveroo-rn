import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../redux/slices/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import { colors } from '../../constants/colors';
import { RootScreenNavigationProp } from '../../types/navigation';

const BasketIcon = () => {
  //Redux
  const items = useAppSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation<RootScreenNavigationProp>();

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="mx-5 p-4 rounded-lg flex-row items-center space-x-1 bg-primary"
      >
        <Text className="text-white font-extrabold text-lg bg-primaryDark py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          Vedi carrello
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="EUR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
