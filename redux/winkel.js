
import { configureStore } from '@reduxjs/toolkit';
import { winkelwagenReducer } from './winkelwagen.slice';

const reducer = {
  cart: winkelwagenReducer,
};

const winkel = configureStore({
  reducer,
});

export default winkel;
