import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice'
import { apiSlice } from "./slice/appSlice";

const store = configureStore({
  reducer: {
    auth:authReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concate(apiSlice.middleware),
  devTools: true,
});

export default store;
