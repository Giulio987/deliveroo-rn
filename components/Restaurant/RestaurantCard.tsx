import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { DishBE } from '../../types/Dish';
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '../../types/navigation';

export type RestaurantCardProps = {
  id: string;
  imgUrl: string | null;
  title: string | null;
  rating: number | null;
  genre: string;
  address: string | null;
  short_description: string | null;
  dishes: DishBE[] | null;
  long: number | null;
  lat: number | null;
};

const RestaurantCard = ({
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
}: RestaurantCardProps) => {
  const navigation = useNavigation<RootScreenNavigationProp>();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow rounded-md"
      onPress={() => {
        navigation.navigate('Restaurant', {
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
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-t-md"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={'green'} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 w-56">
          <MapPinIcon color={'gray'} opacity={0.5} size={22} />
          <Text
            className="text-xs text-gray-500"
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            Vicinanze · {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
