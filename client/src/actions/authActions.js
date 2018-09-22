import { LOGIN, REGISTER, VERIFYSESSION, DELETESESSION } from './types';
import axios from 'axios';

export const Verify = token => dispatch => {
  axios.get(`http://localhost:5000/api/auth/verify?token=${token}`).then(res =>
    dispatch({
      type: VERIFYSESSION,
      payload: res.data
    })
  );
};

export const Login = formJSON => dispatch => {
  axios.post('http://localhost:5000/api/auth/signin', formJSON).then(res =>
    dispatch({
      type: LOGIN,
      payload: res.data
    })
  );
};

export const Register = formJSON => dispatch => {
  axios.post('http://localhost:5000/api/auth/signup', formJSON).then(res =>
    dispatch({
      type: REGISTER,
      payload: res.data
    })
  );
};

export const Logout = token => dispatch => {
  axios.get(`http://localhost:5000/api/auth/logout?token=${token}`).then(res =>
    dispatch({
      type: DELETESESSION,
      payload: res.data
    })
  );
};
