import axios from "axios";
import { LOGIN, SEND_MESSAGE } from "../actions";
import {
  displayError,
  displayMessage,
  initForm,
  toggleLoading,
} from "../reducers/formSlice";
import {
  displayUserError,
  toggleLogged,
  toggleUserLoading,
} from "../reducers/userSlice";

const instance = axios.create({
  baseURL: "http://localhost:3500",
});

let refreshToken;

const config = {
  headers: { "Content-Type": "application/json" },
};

instance.interceptors.response.use(
  (response) =>  response,
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
        console.log("refreshToken");
        await instance
          .post("/refreshToken")
          .then((response) => {
            // TODO: mettre à jour l'accessToken dans le localStorage
            console.log('refresh res', response);
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

  return next(action);
};

export default ajaxMiddleware;
