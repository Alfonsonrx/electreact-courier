import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainActiveTab: "Despacho sucursal"
};

export const homeMainTabSlice = createSlice({
  name: 'homeMainTab',
  initialState,
  reducers: {
    changeActiveTab(state, action) {
      const tab = action.payload;
      state.mainActiveTab = tab;
    }
  },
});

export const { changeActiveTab } = homeMainTabSlice.actions;
export default homeMainTabSlice.reducer;