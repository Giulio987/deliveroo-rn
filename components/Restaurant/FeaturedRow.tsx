import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { colors } from '../../constants/colors';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../../sanity';
import { FeaturedCategory } from '../../types/FeaturedCategory';
import { RestaurantBE } from '../../types/Restaurant';
type Props = {
  id: string;
  title: string;
  description: string;
};

const FeaturedRow: React.FC<Props> = ({ id, title, description }: Props) => {
  //TODO sostituire genre su Restaurant da string al tipo category

  //TODO hook
  const [restaurants, setRestaurants] = useState<RestaurantBE[]>([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ..., 
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
      `,
        { id }
      )
      .then((res: FeaturedCategory) => {
        setRestaurants(res.restaurants);
      })
      .catch(() => Alert.alert('Errore durante il recupero dei ristoranti'));
  }, []);

  return (
    <View className="mt-4 px-4">
      <View className="flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={colors.primary} />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
