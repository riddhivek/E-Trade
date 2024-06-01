import { ConfigureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';


const Store = ConfigureStore({
    reducer: {
        cart: cartReducer
    }
});


export default Store;