import { Category } from './Category';
import { DishBE } from './Dish';
import { SanityProps } from './Sanity';

export interface Restaurant extends SanityProps {
  address: string;
  dishes: DishBE[];
  image: string;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  type: Category;
}
