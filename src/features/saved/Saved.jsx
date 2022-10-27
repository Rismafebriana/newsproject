import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: JSON.parse(localStorage.getItem("saved")) || [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.savedItems.unshift(action.payload);

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
    },

    removeItems: (state, action) => {
      state.savedItems = state.savedItems.filter(
        (item) => item.title !== action.payload.title
      );

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
    },
  },
});

export const { addItems, removeItems } = savedSlice.actions;
export default savedSlice.reducer;
