import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/indonesia/Indonesia";
import savedReducer from "../features/saved/Saved";
import searchReducer from "../features/search/Search"
import logger from "redux-logger";


export const store = configureStore({
  reducer: {
    articles: newsReducer,
    saved: savedReducer,
    search: searchReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
