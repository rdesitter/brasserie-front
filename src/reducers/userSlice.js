import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    email: '',
    name: '',
    password: '',
    response: '',
    role: '',
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
    initUser: (state) => {
      state.loading= false;
      state.email = '';
      state.name = '';
      state.password = '';
      state.response = '';
      state.role = '';
      state.error = false;
      state.logged = false;
    },
    toggleLogged: (state, action) => {
      state.logged = action.payload;
    },
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.logged = true;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeUserEmail, changeUserPassword, displayUserMessage, displayUserError, toggleUserLoading, initUser, toggleLogged, setUser } = userSlice.actions

export default userSlice.reducer;
