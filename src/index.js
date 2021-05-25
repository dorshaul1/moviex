import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';


<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
