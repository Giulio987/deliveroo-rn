import { RestaurantBE } from './Restaurant';
import { SanityProps } from './Sanity';

export interface FeaturedCategory extends SanityProps {
  name: string;
  restaurants: RestaurantBE[];
  short_description: string;
}
