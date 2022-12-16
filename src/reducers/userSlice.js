import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    email: '',
    password: '',
    response: '',
    error: false,
    logged: false,
  },
  reducers: {
    changeUserEmail: (state, action) => {
      state.email = action.payload;
      state.error = false;
      state.response = '';
    },
    changeUserPassword: (state, action) => {
      state.password = action.payload;
      state.error = false;
      state.response = '';
    },
    displayUserMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
    displayUserError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    toggleUserLoading: (state) => {
      state.loading = !state.loading;
    },
    initUserForm: (state) => {
      state.password = '';
      state.response = '';
      state.email = '';
    },
    toggleLogged: (state, action) => {
      state.logged = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeUserEmail, changeUserPassword, displayUserMessage, displayUserError, toggleUserLoading, initUserForm, toggleLogged } = userSlice.actions

export default userSlice.reducer;
