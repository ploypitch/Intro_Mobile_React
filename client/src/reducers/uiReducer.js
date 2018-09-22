import { TOGGLEREGISANDLOGIN, GETTOGGLESTATE } from '../actions/types';

const initialState = {
  Firstpagetoggle: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLEREGISANDLOGIN:
      return {
        ...state,
        Firstpagetoggle: action.payload
      };
    case GETTOGGLESTATE:
      return {
        ...state
      };
    default:
      return state;
  }
}
