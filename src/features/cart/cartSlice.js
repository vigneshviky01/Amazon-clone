import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  cartShow:false,
};




const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,{payload})=>{
        console.log('Adding to cart:', payload.item);
        state.cartItems = [...state.cartItems, payload.item];          },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if(cartItem){
        cartItem.quantity = cartItem.quantity + 1;

      }
    },
    IncreaseItemInQuantity:(state, {payload}) =>{
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if(cartItem){
        cartItem.quantity = cartItem.quantity + payload.quantity;

      }
    },
    decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        if (cartItem && cartItem.quantity > 0) {
          cartItem.quantity = cartItem.quantity - 1;
        }
    },
    calculateTotals: (state) => {
      let quantity = 0;
      
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
  
    showCart:(state)=>{
        state.cartShow=true
    },
    hideCart:(state)=>{
        state.cartShow=false
    }
  },
 
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals,showCart,hideCart ,addToCart, IncreaseItemInQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;