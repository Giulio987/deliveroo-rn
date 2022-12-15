import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { BasketNavProps } from '../types/navigation';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectRestaurant } from '../redux/slices/restaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../redux/slices/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { colors } from '../constants/colors';
import deliverooImg from '../assets/logo.png';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';
type Props = {};

const BasketScreen = ({ navigation }: Props & BasketNavProps) => {
  //redux
  const restaurant = useAppSelector(selectRestaurant);
  const items = useAppSelector(selectBasketItems);
  const total = useAppSelector(selectBasketTotal);
  const dispatch = useAppDispatch();

  //State
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      //@ts-ignore
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-primary bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Carrello</Text>
            <Text className="text-center text-gray-400">{restaurant.name}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color={colors.primary} height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={deliverooImg}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Spedizione in 50-75 minuti</Text>
          <TouchableOpacity>
            <Text className="text-primary">Cambia</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(
            (
              [key, items]: any //TODO any
            ) => (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text className="text-primary">{items.length} x</Text>
                <Image
                  source={{
                    uri: urlFor(items[0]?.image).url(),
                  }}
                  className="h-12 w-12 rounded-full border border-primary"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600">
                  <Currency quantity={items[0]?.price} currency="EUR" />
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <Text className="text-primary text-xs">Rimuovi</Text>
                </TouchableOpacity>
              </View>
            )
          )}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotale</Text>
            <Text className="text-gray-400">
              <Currency quantity={total} currency="EUR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Spese di spedizione</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="EUR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Totale ordine</Text>
            <Text className="font-extrabold">
              <Currency quantity={+(total + 5.99)} currency="EUR" />
            </Text>
          </View>
          <TouchableOpacity className="rounded-lg bg-primary p-4">
            <Text className="text-center text-white text-xl font-bold">
              Conferma ordine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
