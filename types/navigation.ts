import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RestaurantCardProps } from '../components/Restaurant/RestaurantCard';

export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantCardProps;
  Basket: undefined;
  PreparingOrderScreen: undefined;
  Delivery: undefined;
};

//Component Screens props
export type HomeNavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type RestaurantProps = NativeStackScreenProps<
  RootStackParamList,
  'Restaurant'
>;
export type BasketNavProps = NativeStackScreenProps<
  RootStackParamList,
  'Basket'
>;
export type PreparingOrderScreenNavProps = NativeStackScreenProps<
  RootStackParamList,
  'PreparingOrderScreen'
>;

export type DeliveryScreenNavProps = NativeStackScreenProps<
  RootStackParamList,
  'Delivery'
>;

//UseNavigation
export type RootScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
