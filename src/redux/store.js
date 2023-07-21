import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeTabReducer from './homeMainTabSlice';
import homeTablesTabReducer from './homeTablesTabSlice';

export default configureStore({
  reducer: {
    homeMainTab: homeTabReducer,
    homeTablesTab: homeTablesTabReducer
  }
})