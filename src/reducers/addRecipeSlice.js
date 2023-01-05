import { createSlice } from '@reduxjs/toolkit'

export const addRecipeSlice = createSlice({
  name: 'addRecipe',
  initialState: {
    loading: false,
    name: '',
    description: null,
    price: 0,
    response: '',
    error: false,
  },
  reducers: {
    changeaddRecipeName: (state, action) => {
      state.name = action.payload;
      state.error = false;
      state.response = '';
    },
    changeaddRecipeDescription: (state, action) => {
      state.description = action.payload;
      state.error = false;
      state.response = '';
    },
    changeaddRecipePrice: (state, action) => {
      state.price = action.payload;
      state.error = false;
      state.response = '';
    },
    displayAddRecipeMessage: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    },
    displayAddRecipeError: (state, action) => {
      state.response = action.payload;
      state.error = true;
      state.loading = false;
    },
    toggleaddRecipeLoading: (state) => {
      state.loading = !state.loading;
    },
    initAddRecipe: (state) => {
      state.loading= false;
      state.name = '';
      state.description = null;
      state.price = 0;
      state.response = '';
      state.error = false;
    },
    toggleLogged: (state, action) => {
      state.logged = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeaddRecipeDescription, changeaddRecipeName, changeaddRecipePrice, displayAddRecipeError, displayAddRecipeMessage, initAddRecipe } = addRecipeSlice.actions

export default addRecipeSlice.reducer;
