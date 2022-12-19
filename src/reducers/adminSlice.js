import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    response: '',
    error: false,
    users: [],
    name: '',
    email: '',
    admin: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    displayErrorMessage: (state, action) => {
      state.error = true;
      state.response = action.payload;
      state.loading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUsers, displayErrorMessage } = adminSlice.actions

export default adminSlice.reducer;
