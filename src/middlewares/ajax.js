import axios from 'axios';
import { displayError, displayMessage, initForm, toggleLoading } from '../reducers/formSlice';

const instance = axios.create({
  baseURL: 'http://localhost:3500'
});

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const ajaxMiddleware = store => next => action => {
  if (action.type === 'contact/sendMessage') {

    const { form: { name, email, message }} = store.getState();

    store.dispatch(toggleLoading());

    instance.post('/contact', { name, email, message }, config)
      .then((response) => {
        if(response.status === 200) {
          store.dispatch(displayMessage(response.data.message));
          store.dispatch(initForm());
        } else {
          store.dispatch(displayError(response.data.message));
        }
      })
      .catch((error) => {
        store.dispatch(displayError('Erreur serveur. Merci de réessayer plus tard.'))
      })
  }

  return next(action)
}

export default ajaxMiddleware;
