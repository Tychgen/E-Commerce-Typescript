import { configureStore} from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice'
import cartSlice from './slices/cartSlice'
import wishlistSlice from './slices/wishlistSlice'
import productsSlice from './slices/productsSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        search: searchSlice,
        wishlist: wishlistSlice,
        product: productsSlice,
      },
      devTools: true, 
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch