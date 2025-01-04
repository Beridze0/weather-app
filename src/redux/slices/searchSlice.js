import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchInput: '' },
  reducers: {
    updateSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { updateSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
