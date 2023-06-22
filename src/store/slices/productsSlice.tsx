import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../store'
import { PayloadAction } from '@reduxjs/toolkit'


interface ProductsState {
    isLoading:boolean,
    data:Array<object>,
    error: null
}

const initialState:ProductsState = {
    isLoading:false,
    data: [],
    error:null
}

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
        setProductsSuccess: (state, action:PayloadAction<Array<object>>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
          },
    }
})

export const selectIsLoading = (state:RootState) => state.product.isLoading;
export const selectProducts = (state:RootState) => state.product.data;
export const {setProductsSuccess} = productsSlice.actions;

export default productsSlice.reducer;