import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: {};
};

export type HomeNavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
