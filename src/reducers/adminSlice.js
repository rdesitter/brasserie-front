import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    response: '',
    error: false,
    users: [],
    cartes: [],
    name: '',
    email: '',
    admin: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCartes: (state, action) => {
      state.cartes = action.payload;
    },
    displayErrorMessage: (state, action) => {
      state.error = true;
      state.response = action.payload;
      state.loading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUsers, displayErrorMessage, setCartes } = adminSlice.actions

export default adminSlice.reducer;
