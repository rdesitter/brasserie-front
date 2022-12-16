export const SEND_MESSAGE = 'contact/sendMessage';

function sendMessage() {
  return {
    type: SEND_MESSAGE,
  }
}

export const LOGIN = 'login/logIn';

function logIn() {
  return {
    type: LOGIN,
  }
}

export { sendMessage, logIn };