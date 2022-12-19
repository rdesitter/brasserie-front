import { createSlice } from '@reduxjs/toolkit'

export const editUserSlice = createSlice({
  name: 'editUser',
  initialState: {
    loading: false,
    email: '',
    name: '',
    admin: false,
    response: '',
    error: false,
  },
  reducers: {
    changeCurrentUserEmail: (state, action) => {
      state.email = action.payload;
      state.error = false;
      state.response = '';
    },
    changeCurrentUserName: (state, action) => {
      state.name = action.payload;
      state.error = false;
      state.response = '';
    },
    changeCurrentUserAdmin: (state, action) => {
        state.admin = action.payload;
        state.error = false;
        state.response = '';
    },
    displayCurrentUserMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
    displayCurrentUserError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    toggleCurrentUserLoading: (state) => {
      state.loading = !state.loading;
    },
    initCurrentUser: (state) => {
      state.loading= false;
      state.email = '';
      state.name = '';
      state.password = '';
      state.response = '';
      state.admin = false;
      state.error = false;
      state.logged = false;
    },
    setCurrentUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.admin = action.payload.admin;
      state.loading= false;
    },
    initCurrentResponse: (state) => {
        state.error = false;
        state.response = ''; 
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrentUserEmail, changeCurrentUserName, displayCurrentUserMessage, displayCurrentUserError, toggleCurrentUserLoading, initCurrentUser, setCurrentUser, changeCurrentUserAdmin, initCurrentResponse } = editUserSlice.actions

export default editUserSlice.reducer;
