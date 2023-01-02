import axios from "axios";
import { ADD_CARTE, GET_CARTES, GET_CURRENT_USER, GET_USERS, LOGIN, REGISTER_USER, SAVE_CURRENT_USER, SEND_MESSAGE, SET_PASSWORD } from "../actions";
import { displayErrorMessage, setCartes, setUsers } from "../reducers/adminSlice";
import { displayCurrentUserError, displayCurrentUserMessage, setCurrentUser, toggleCurrentUserLoading } from "../reducers/editUserSlice";
import {
  displayError,
  displayMessage,
  initForm,
  toggleLoading,
} from "../reducers/formSlice";
import { displayNewCarteError, displayNewCarteMessage, toggleNewCarteLoading } from "../reducers/newCarteSlice";
import { displayNewUserError, displayNewUserMessage, toggleNewUserLoading, userActivated } from "../reducers/registerSlice";
import {
  displayUserError,
  toggleLogged,
  toggleUserLoading,
} from "../reducers/userSlice";

const instance = axios.create({
  baseURL: "http://localhost:3500",
});

let config;

const token = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');

if(token !== '') {
  config = {
    headers: { 
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`,
   },
  };
} else {
  config = {
    headers: { "Content-Type": "application/json" },
  };
}

// Axios interceptor for 401
instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    if (
      error.config.url !== "/refreshToken" &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      if (refreshToken && refreshToken !== "") {
        instance.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;

        await instance
          .post("/refreshToken")
          .then((response) => {
            localStorage.setItem('accessToken', response.data.accessToken)
            originalRequest.headers["Authorization"] = `Bearer ${response.data.accessToken}`;
            instance.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
          })
          .catch((err) => {
            console.log(err.response.status);
            refreshToken = null;
          });
        return instance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);


const ajaxMiddleware = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const {
      form: { name, email, message },
    } = store.getState();

    store.dispatch(toggleLoading());

    instance
      .post("/contact", { name, email, message }, config)
      .then((response) => {
        if (response.status === 200) {
          store.dispatch(displayMessage(response.data.message));
          store.dispatch(initForm());
        } else {
          store.dispatch(displayError(response.data.message));
        }
      })
      .catch((error) => {
        store.dispatch(
          displayError("Erreur serveur. Merci de réessayer plus tard.")
        );
      });
  }

  if (action.type === LOGIN) {
    const {
      user: { email, password },
    } = store.getState();

    store.dispatch(toggleUserLoading());

    instance
      .post("/login", { email, password }, config)
      .then((response) => {
        console.log("res", response);

        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        refreshToken = response.data.refreshToken;

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        store.dispatch(toggleLogged(true));
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          return store.dispatch(displayUserError(error.response.data.message));
        }
        store.dispatch(
          displayUserError("Erreur serveur. Merci de réessayer plus tard.")
        );
      })
  }

  if (action.type === GET_USERS) {
    instance.get("/users", config)
      .then((response) => {
        store.dispatch(setUsers(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  if (action.type === REGISTER_USER) {
    const { register: {name, email, admin}} = store.getState();
    store.dispatch(toggleNewUserLoading());
    // Save user in DB
    instance.post('/saveUser', { name, email, admin }, config)
      .then(() => {
        // Send user a link to set password
        instance.post('/sendRegistrationMail', { name, email, admin }, config)
          .then((response) => {
            console.log('res', response);
            if(response.status === 200) {
              store.dispatch(displayNewUserMessage(response.data.message));
            }
          })
          .catch((error) => {
            console.log('err', error);
            if(error.response.status === 500) {
              store.dispatch(displayNewUserError(error.response.data.message));
            }
          })
        // store.dispatch(displayNewUserMessage(response.data.message));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(displayNewUserError(error.response.data.message));
      })
  }

  if (action.type === SET_PASSWORD) {
    const {email, password, userToken } = action.payload;
    store.dispatch(toggleNewUserLoading());

    instance.post('/setPassword', { email, password }, {
      headers: { "Content-Type": "application/json" },
      authorization: `Bearer ${userToken}`,
    }).then((response) => {
      store.dispatch(displayNewUserMessage(response.data.message));
      store.dispatch(userActivated(true));
    }).catch((error) => {
      store.dispatch(displayNewUserError(error.response.data.message));
    })
  }

  if (action.type === GET_CURRENT_USER) {
    const userId = action.payload;
    store.dispatch(toggleCurrentUserLoading());

    instance.get(`/user/${userId}`)
      .then((response) => {
        store.dispatch(setCurrentUser(response.data));
      })
      .catch((error) => {
        store.dispatch(displayErrorMessage(error.response.data.message))
      })
  }

  if (action.type === SAVE_CURRENT_USER) {
    const {editUser : { name, email, admin }} = store.getState();
    const id = action.payload;
    console.log('cur',id, name, email, admin);
    store.dispatch(toggleCurrentUserLoading());
    
    instance.patch(`/user/${id}/edit`, {name, email, admin}, config)
      .then((response) => {
        // console.log(response);
        store.dispatch(displayCurrentUserMessage(response.data.message));
      })
      .catch((error) => {
        // console.log(error);
        store.dispatch(displayCurrentUserError(error.response.data.message));
      })
  }

  if (action.type === GET_CARTES) {
    instance.get('/cartes')
      .then((response) => {
        console.log(response);
        store.dispatch(setCartes(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  if (action.type === ADD_CARTE) {
    const { newCarte: {name}} = store.getState();
    console.log(name);
    store.dispatch(toggleNewCarteLoading());
    // Save carte in DB
    instance.post('/cartes/add', { name }, config)
      .then((response) => {
        // console.log(response);
        store.dispatch(displayNewCarteMessage(response.data.message));
      })
      .catch((error) => {
        // console.log(error);
        store.dispatch(displayNewCarteError(error.response.data.message));
      })
  }

  return next(action);
};

export default ajaxMiddleware;
