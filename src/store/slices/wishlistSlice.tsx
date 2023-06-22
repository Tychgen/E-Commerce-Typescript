import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface WishlistItems {
    id:number,
    isWished:boolean
}

interface WishlistState {
    wishlistItems:WishlistItems[]
}

const initialState: WishlistState  = {
    wishlistItems: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action:PayloadAction<WishlistItems>) => {
            const id = action.payload.id;
            const existingItem = state.wishlistItems.find((item) => item.id === id);
      
            if (existingItem) {
              existingItem.isWished = true;
            } else {
              state.wishlistItems.push({
                id,
                isWished: true,
              });
            }
          },
        removeFromWishlist: (state, action:PayloadAction<WishlistItems>) => {
            const id = action.payload.id;
            const existingItem = state.wishlistItems.find((item) => item.id === action.payload.id);
      
            if (existingItem) {
              existingItem.isWished = false;
            } else {
              state.wishlistItems.push({
                id,
                isWished: false,
              });
            }
        },  
    }
});


export const selectWishlist = (state:RootState) => state.wishlist.wishlistItems;
export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer