import { SanityProps } from './Sanity';

export interface DishBE extends SanityProps {
  id?: string;
  image: string;
  name: string;
  price: number;
  short_description: string;
}

export interface Dish {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}
