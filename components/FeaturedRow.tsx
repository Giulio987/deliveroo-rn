import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { colors } from '../constants/colors';
import RestaurantCard from './RestaurantCard';

type Props = {
  id: string;
  title: string;
  description: string;
};

const FeaturedRow = ({ id, title, description }: Props) => {
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
        <RestaurantCard
          id={'12345'}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best sushi"
          rating={4.5}
          genre="Japanese"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={[]}
          long={-73.975}
          lat={40.7829}
        />
        <RestaurantCard
          id={'12345'}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best sushi"
          rating={4.5}
          genre="Japanese"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={[]}
          long={-73.975}
          lat={40.7829}
        />
        <RestaurantCard
          id={'12345'}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best sushi"
          rating={4.5}
          genre="Japanese"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={[]}
          long={-73.975}
          lat={40.7829}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
