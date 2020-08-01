import { LOG_IN, SIGN_UP, RECONNECT } from '../actions/session';

const defaultState = {
  token: '',
  user: {
    id: '',
    username: '',
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
    case SIGN_UP:
    case RECONNECT:
      return {
        ...state,
        token: action.payload.token,
        user: {
          id: action.payload.id,
          username: action.payload.username,
        }
      }
    default:
      return state;
  }
}
