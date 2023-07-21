import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tablesActiveTab: "Despacho"
};

export const homeTablesTabSlice = createSlice({
  name: 'homeTablesTab',
  initialState,
  reducers: {
    changeActiveTab(state, action) {
      const tab = action.payload;
      state.tablesActiveTab = tab;
    }
  },
});

export const { changeActiveTab } = homeTablesTabSlice.actions;
export default homeTablesTabSlice.reducer;