import { SanityProps } from './Sanity';

export interface Dish extends SanityProps {
  image: string;
  name: string;
  price: number;
  short_description: string;
}
