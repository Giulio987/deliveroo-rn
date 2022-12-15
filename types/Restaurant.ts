import { Category } from './Category';
import { DishBE } from './Dish';
import { SanityProps } from './Sanity';

export type RestaurantBE = SanityProps &
  Restaurant & {
    type: Category;
  };

export interface Restaurant {
  id: string | null;
  address: string | null;
  dishes: DishBE[] | null;
  name: string | null;
  image: string | null;
  rating: number | null;
  short_description: string | null;
  genre: string | null;
  lat: number | null;
  long: number | null;
}
