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

export { sendMessage, logIn };