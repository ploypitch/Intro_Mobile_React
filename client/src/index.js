import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Verify } from './actions/authActions';
import App from './App';
import store from './store';

if (localStorage.loginSession) {
  const payload = localStorage.loginSession;
  store.dispatch(Verify(payload));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
