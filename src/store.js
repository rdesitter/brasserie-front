import { configureStore } from '@reduxjs/toolkit';
import ajaxMiddleware from './middlewares/ajax';
import formReducer from './reducers/formSlice';
import loginReducer from './reducers/userSlice';

export default configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
  },
  middleware: [ajaxMiddleware]
})