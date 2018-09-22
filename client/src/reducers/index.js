import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import toggleReducer from './uiReducer';
export default combineReducers({
  auth: authReducer,
  item: itemReducer,
  toggle: toggleReducer
});
