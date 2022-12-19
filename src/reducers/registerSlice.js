import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    email: '',
    name: '',
    response: '',
    admin: '',
    error: false,
    password: '',
    passwordConfirm: '',
    activated: false,
  },
  reducers: {
    changeNewUserEmail: (state, action) => {
      state.email = action.payload;
      state.error = false;
      state.response = '';
    },
    changeNewUserName: (state, action) => {
        state.name = action.payload;
        state.error = false;
        state.response = '';
    },
    changeNewUserAdmin: (state, action) => {
        state.admin = action.payload;
        state.error = false;
        state.response = '';
    },
    displayNewUserMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
    displayNewUserError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    toggleNewUserLoading: (state) => {
      state.loading = !state.loading;
    },
    initNewUser: (state) => {
      state.loading= false;
      state.email = '';
      state.name = '';
      state.response = '';
      state.admin = '';
      state.error = false;
      state.password = '';
      state.passwordConfirm = '';
      state.saved = false;
    },
    changeNewUserPassword: (state, action) => {
      state.password = action.payload;
      state.error = false;
      state.response = '';
    },
    changeNewUserPasswordConfirm: (state, action) => {
      state.passwordConfirm = action.payload;
      state.error = false;
      state.response = '';
    },
    userActivated: (state, action) => {
      state.activated = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeNewUserEmail, changeNewUserAdmin, changeNewUserName, displayNewUserMessage, displayNewUserError, toggleNewUserLoading, initNewUser, changeNewUserPassword, changeNewUserPasswordConfirm, userActivated } = registerSlice.actions

export default registerSlice.reducer;
