import '../scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose  } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import images from './reducers/images';
import api from './middleware/api';
import { loadState, saveState } from './store/localStorage';

const persistedState = loadState();
const AllReducers = combineReducers({
  images
});

let store = createStore(
  AllReducers,
  persistedState,
  compose(
    applyMiddleware(thunk, api),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

const container = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  container
);