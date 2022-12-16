import { configureStore } from '@reduxjs/toolkit';
import ajaxMiddleware from './middlewares/ajax';
import formReducer from './reducers/formSlice';

export default configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: [ajaxMiddleware]
})