import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './slices/basketSlice';
import restaurantReducer from './slices/restaurantSlice';
const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
