import { TOGGLEREGISANDLOGIN, GETTOGGLESTATE } from './types';
export const Togglefirstpage = event => dispatch => {
  dispatch({
    type: TOGGLEREGISANDLOGIN,
    payload: event
  });
};
export const getToggleState = () => dispatch => {
  dispatch({
    type: GETTOGGLESTATE
  });
};
