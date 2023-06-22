import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../store";

export interface CartItems {
  id: number,
  quantity: number
}

interface CartState {
  cartItems: CartItems[],
  quantityTotal: number,
};

const initialState: CartState = {
  cartItems: [],
  quantityTotal: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
      }
    },
    increaseQuantityTotal: (state) => {
      state.quantityTotal += 1;
    },
    decreaseQuantityTotal: (state) => {
      if (state.quantityTotal > 0) {
        state.quantityTotal -= 1;
      }
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectQuantityItems = (state: RootState) => state.cart.quantityTotal;
export const { addToCart, removeFromCart, increaseQuantityTotal, decreaseQuantityTotal } = cartSlice.actions
export default cartSlice.reducer