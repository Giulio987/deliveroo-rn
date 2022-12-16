import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { urlFor } from '../../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { colors } from '../../constants/colors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../../redux/slices/basketSlice';
type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = ({ id, name, description, image, price }: Props) => {
  //TODO colori in costanti
  const [isPressed, setIsPressed] = useState(false);
  //Redux
  const items = useAppSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useAppDispatch();
  //Handlers
  const attItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    if (!(items.length > 0)) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-2  border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
        onPress={() => setIsPressed((prev) => !prev)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-600 pt-1">
              <Currency quantity={price} currency="EUR" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 p-4 bg-gray-300 border border-[#F3F3F4]"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemsFromBasket}
              disabled={items.length === 0}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? colors.primary : 'gray'}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={attItemToBasket}>
              <PlusCircleIcon size={40} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
