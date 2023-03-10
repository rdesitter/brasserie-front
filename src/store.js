import { configureStore } from '@reduxjs/toolkit';
import ajaxMiddleware from './middlewares/ajax';
import adminReducer from './reducers/adminSlice';
import editUserReducer from './reducers/editUserSlice';
import formReducer from './reducers/formSlice';
import newCarteReducer from './reducers/newCarteSlice';
import registerReducer from './reducers/registerSlice';
import userReducer from './reducers/userSlice';
import addRecipeReducer from './reducers/addRecipeSlice';

export default configureStore({
  reducer: {
    form: formReducer,
    user: userReducer,
    admin: adminReducer,
    register: registerReducer,
    editUser: editUserReducer,
    newCarte: newCarteReducer,
    addRecipe: addRecipeReducer,
  },
  middleware: [ajaxMiddleware]
})