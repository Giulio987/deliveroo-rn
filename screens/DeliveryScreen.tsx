import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { DeliveryScreenNavProps } from '../types/navigation';
import { useAppSelector } from '../redux/hooks';
import { selectRestaurant } from '../redux/slices/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import deliverooDriver from '../assets/deliveroo-driver-1.png';
import deliverooIcon from '../assets/logo.png';
import * as Progress from 'react-native-progress';
import { colors } from '../constants/colors';
import MapView, { Marker } from 'react-native-maps';

type Props = {} & DeliveryScreenNavProps;

const DeliveryScreen = ({ navigation }: Props) => {
  const restaurant = useAppSelector(selectRestaurant);
  return (
    <View className="bg-primary flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color={'white'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="font-light text-white text-lg">
              Aiuto per l'ordine?
            </Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Arrivo Stimato</Text>
              <Text className="text-4xl font-bold">45-55 minuti</Text>
            </View>
            <Image source={deliverooDriver} className="h-20 w-20" />
          </View>
          <Progress.Bar color={colors.primary} indeterminate />
          <Text className="mt-3 text-gray-500">
            Il tuo ordine a {restaurant.name} è in preparazione
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat || 0.123,
          longitude: restaurant.long || 0.123,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat || 0.123,
            longitude: restaurant.long || 0.123,
          }}
          pinColor={colors.primary}
          identifier={'origin'}
          title={restaurant.name || ''}
          description={restaurant.short_description || ''}
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={deliverooIcon}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Giulio Milani</Text>
          <Text className="text-gray-400">Il tuo rider</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-primary text-lg mr-5">Chiama</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
