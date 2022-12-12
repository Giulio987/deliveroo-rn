import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '../../types/Dish';
import { RootState } from '../store';

interface BasketState {
  items: Dish[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlices = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Dish>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('Cannot remove product');
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlices.actions;
export default basketSlices.reducer;

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
