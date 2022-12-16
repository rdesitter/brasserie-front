import { configureStore } from '@reduxjs/toolkit';
import ajaxMiddleware from './middlewares/ajax';
import formReducer from './reducers/formSlice';
import userReducer from './reducers/userSlice';

export default configureStore({
  reducer: {
    form: formReducer,
    user: userReducer,
  },
  middleware: [ajaxMiddleware]
})