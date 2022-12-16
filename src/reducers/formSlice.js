import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    loading: false,
    name: '',
    email: '',
    message: '',
    response: '',
    error: false,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
      state.error = false;
      state.response = '';
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
      state.error = false;
      state.response = '';
    },
    changeMessage: (state, action) => {
      state.message = action.payload;
      state.error = false;
      state.response = '';
    },
    displayMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
    displayError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    initForm: (state) => {
      state.name = '';
      state.message = '';
      state.email = '';
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeName, changeEmail, changeMessage, displayMessage, displayError, toggleLoading, initForm } = formSlice.actions

export default formSlice.reducer;
