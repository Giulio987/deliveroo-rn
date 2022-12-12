import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RestaurantCardProps } from '../components/Restaurant/RestaurantCard';

export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantCardProps;
  Basket: undefined;
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

//UseNavigation
export type RootScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
