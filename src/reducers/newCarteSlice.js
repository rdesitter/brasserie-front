import { createSlice } from '@reduxjs/toolkit'

export const newCarteSlice = createSlice({
  name: 'newCarte',
  initialState: {
    loading: false,
    name: '',
    status: '',
    response: '',
    error: false,
  },
  reducers: {
    changeNewCarteName: (state, action) => {
      state.name = action.payload;
      state.error = false;
      state.response = '';
    },
    toggleNewCarteLoading: (state) => {
      state.loading = !state.loading;
    },
    displayNewCarteError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    displayNewCarteMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeNewCarteName, toggleNewCarteLoading, displayNewCarteError, displayNewCarteMessage } = newCarteSlice.actions

export default newCarteSlice.reducer;
