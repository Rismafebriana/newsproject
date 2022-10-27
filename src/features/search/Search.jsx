import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
};

export const searchNews = createAsyncThunk(
  "search/searchNews",
  async (search) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=9ddab756845e4422a9d321f36b9b351a`
    );
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(searchNews.fulfilled, (state, action) => {
      state.entities = action.payload.articles;
    });
  },
});

export default searchSlice.reducer;