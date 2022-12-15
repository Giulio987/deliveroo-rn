import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '../../types/Dish';
import { Restaurant } from '../../types/Restaurant';
import { RootState } from '../store';

interface RestaurantState {
  restaurant: Restaurant;
}

const initialState: RestaurantState = {
  restaurant: {
    id: null,
    image: null,
    name: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    lat: null,
    long: null,
  },
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;
