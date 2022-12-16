import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { HomeNavProps } from '../types/navigation';
import logo from '../assets/logo.png';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { colors } from '../constants/colors';
import Categories from '../components/Category/Categories';
import FeaturedRow from '../components/Restaurant/FeaturedRow';
import client from '../sanity';
import { FeaturedCategory } from '../types/FeaturedCategory';

const Home = ({ navigation }: HomeNavProps) => {
  //TODO custom hooks
  const [featuredCategories, setFeaturedCategories] = useState<
    FeaturedCategory[]
  >([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ..., 
        dishes[]->
      }
    }
    `
      )
      .then((data: FeaturedCategory[]) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={logo} className="w-7 h-7 rounded-full bg-gray-300 p-4" />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Ordina ora!</Text>
          <Text className="font-bold text-xl">
            Posizione Attuale
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
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <>
          {/* Categories */}
          <Categories />
          {/* Featured */}
          {featuredCategories?.map((featCat) => (
            <FeaturedRow
              key={featCat._id}
              id={featCat._id}
              title={featCat.name}
              description={featCat.short_description}
            />
          ))}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
