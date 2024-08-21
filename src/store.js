import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/user/userSlice";
import cartSlice from "./feature/cart/cartSlice";

const store = configureStore({ reducer: { user: userSlice, cart: cartSlice } });

export default store;
