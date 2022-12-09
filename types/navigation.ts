import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RestaurantCardProps } from '../components/Restaurant/RestaurantCard';

export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantCardProps;
};

//Component Screens props
export type HomeNavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type RestaurantProps = NativeStackScreenProps<
  RootStackParamList,
  'Restaurant'
>;

//UseNavigation
export type RootScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
