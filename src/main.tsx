import React from 'react';
import './main.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
