import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEMS,
  UPDATE_ITEMS,
  ITEMS_LOADING
} from './types';

import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(setitemLoading())
  axios.get('http://localhost:5000/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  )
};

export const deleteItems = id => dispatch => {
  axios.delete(`http://localhost:5000/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEMS,
      payload: id
    })
  )
};

export const addItems = item => dispatch => {
  axios.post('http://localhost:5000/api/items', item).then(res =>
    dispatch({
      type: ADD_ITEMS,
      payload: res.data
    })
  )
};

export const updateItems = name => {
  return {
    type: UPDATE_ITEMS,
    payload: name
  }
};

export const setitemLoading = () => {
  return {
    type: ITEMS_LOADING
  }
};

