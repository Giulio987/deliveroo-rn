import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import { HomeNavProps } from '../types/navigation';
import logo from '../assets/logo.png';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { colors } from '../constants/colors';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const Home = ({ navigation }: HomeNavProps) => {
  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={logo} className="w-7 h-7 rounded-full bg-gray-300 p-4" />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={colors.primary} />
          </Text>
        </View>
        <UserIcon size={35} color={colors.primary} />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={'gray'} size={20} />
          <TextInput
            placeholder="Restaurants and cousines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={colors.primary} />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          id="123"
          title={'Fetaured'}
          description="Paid placements for our partners"
        />
        <FeaturedRow
          id="234"
          title={'Tasty Discounts'}
          description="Everyone's been enjoying these juicy discounts"
        />
        <FeaturedRow
          id="345"
          title={'Offers near you!'}
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
