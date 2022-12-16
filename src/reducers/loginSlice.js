import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    email: '',
    password: '',
    response: '',
    error: false,
  },
  reducers: {
    changeLoginEmail: (state, action) => {
      state.email = action.payload;
      state.error = false;
      state.response = '';
    },
    changeLoginPassword: (state, action) => {
      state.password = action.payload;
      state.error = false;
      state.response = '';
    },
    displayLoginMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
    displayLoginError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    toggleLoginLoading: (state) => {
      state.loading = !state.loading;
    },
    initLoginForm: (state) => {
      state.password = '';
      state.response = '';
      state.email = '';
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeLoginEmail, changeLoginPassword, displayLoginMessage, displayLoginError, toggleLoginLoading, initLoginForm } = loginSlice.actions

export default loginSlice.reducer;
