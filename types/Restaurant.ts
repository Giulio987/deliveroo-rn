import { Category } from './Category';
import { Dish } from './Dish';
import { SanityProps } from './Sanity';

export interface Restaurant extends SanityProps {
  address: string;
  dishes: Dish[];
  image: string;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  type: Category;
}
