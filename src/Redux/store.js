// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice"
// import apiReducer from "./apiSlice"
// const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         api: apiReducer
//     }
// })

// export default store;
// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // For web; use AsyncStorage for React Native
import cartReducer from './cartSlice';
import apiReducer from './apiSlice';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers into a single reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  api: apiReducer,
});

// Wrap the combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };

