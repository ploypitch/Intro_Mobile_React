import {
  LOGIN,
  VERIFYSESSION,
  REGISTER,
  DELETESESSION
} from '../actions/types';

const initialState = {
  isauth: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VERIFYSESSION:
      return {
        ...state,
        isauth: action.payload.success
      };
    case REGISTER:
      return {
        ...state
      };
    case LOGIN: {
      if (action.payload.seccess) {
        return {
          ...state,
          isauth: action.payload.success
        };
      } else {
        localStorage.setItem('loginSession', action.payload.token);
        return {
          ...state,
          isauth: action.payload.success
        };
      }
    }
    case DELETESESSION: {
      if (action.payload.seccess) {
        return {
          ...state,
          isauth: !action.payload.seccess
        };
      } else {
        localStorage.removeItem('loginSession');
        return {
          ...state,
          isauth: action.payload.seccess
        };
      }
    }
    default:
      return state;
  }
}
