import { createSlice } from "@reduxjs/toolkit";

const movixSlice = createSlice({
  name: "movixReducer",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const movixAction= movixSlice.actions;

export const movixReducer = movixSlice.reducer;
