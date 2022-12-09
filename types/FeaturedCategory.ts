import { Restaurant } from './Restaurant';
import { SanityProps } from './Sanity';

export interface FeaturedCategory extends SanityProps {
  name: string;
  restaurants: Restaurant[];
  short_description: string;
}
