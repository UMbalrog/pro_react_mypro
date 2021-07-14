import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { API } from './config';
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux';
import store, { history } from './store';

console.log(API);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
