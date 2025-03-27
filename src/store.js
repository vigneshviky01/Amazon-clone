import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { loadState, saveState } from "./utils/localStorageUtils"; // Import Local Storage functions

// Load initial state from Local Storage
const preloadedState = {
  cart: loadState() || { cartItems: [], quantity: 0, total: 0, cartShow: false },
};

// Create Redux store with loaded state
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Directly use the cartReducer
  },
  preloadedState, // Use Local Storage data if available
});

// Subscribe to store updates and save to Local Storage
store.subscribe(() => {
  saveState(store.getState().cart);
});
