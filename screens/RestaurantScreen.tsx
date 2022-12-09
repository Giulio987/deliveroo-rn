import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { RestaurantProps } from '../types/navigation';
import { urlFor } from '../sanity';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import { colors } from '../constants/colors';
import DishRow from '../components/Dish/DishRow';

type Props = {};

const RestaurantScreen = ({ route, navigation }: Props & RestaurantProps) => {
  //TODO componenti
  const {
    id,
    imgUrl,
    title,
    address,
    dishes,
    genre,
    lat,
    long,
    rating,
    short_description,
  } = route.params;

  return (
    <ScrollView>
      <View className="relative bg-gray-900">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray p-4  opacity-90"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View className="bg-white ">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} opacity={0.5} color={'green'} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1 w-56">
              <MapPinIcon color={'gray'} opacity={0.5} size={22} />
              <Text
                className="text-xs text-gray-500"
                numberOfLines={2}
                ellipsizeMode={'tail'}
              >
                Vicinanze · {address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color={'gray'} size={20} opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Hai allergie alimentari?
          </Text>
          <ChevronRightIcon color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* Dishrows */}
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
