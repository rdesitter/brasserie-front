export const SEND_MESSAGE = 'contact/sendMessage';

function sendMessage() {
  return {
    type: SEND_MESSAGE,
  }
}

export const LOGIN = 'user/logIn';

function logIn() {
  return {
    type: LOGIN,
  }
}

export const GET_USERS = 'admin/getUser';

function getUsers() {
  return {
    type: GET_USERS,
  }
}

export const GET_CARTES = 'admin/getCartes';

function getCartes() {
  return {
    type: GET_CARTES,
  }
}

export const REGISTER_USER = 'register/registerUser';

function registerUser() {
  return {
    type: REGISTER_USER,
  }
}

export const ADD_CARTE = 'newCarte/addCarte';

function addCarte() {
  return {
    type: ADD_CARTE,
  }
}

export const SAVE_CURRENT_USER = 'editUser/saveCurrentUser';

function saveCurrentUser(id) {
  return {
    type: SAVE_CURRENT_USER,
    payload: id,
  }
}


export const SET_PASSWORD = 'register/setPassword';

function setPassword(payload) {
  return {
    type: SET_PASSWORD,
    payload,
  }
}

export const GET_CURRENT_USER = 'admin/getCurrentUser';

function getCurrentUser(id) {
  return {
    type: GET_CURRENT_USER,
    payload: id,
  }
}

export { sendMessage, logIn, getUsers, registerUser, setPassword, getCurrentUser, saveCurrentUser, getCartes, addCarte };
