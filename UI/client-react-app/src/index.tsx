import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import './styles/index.css';
import NavBar from './components/NavBar/NavBar';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore}  from "redux";
import reducers from './store/reducers';
import logger from "redux-logger";
import history from './core/history';
import Routes from './Routes';
import { Provider } from "react-redux";
import { theme } from './styles/material-theme';
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./store/sagas";
import {ProfileActions} from "./store/profile/profile.actions";
import {Session} from "./core/session";
import axios from 'axios';

// create session
export const session = new Session();

axios.defaults.baseURL = 'http://localhost:8080';
const token = session.getToken();
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

// run the saga
sagaMiddleware.run(rootSaga);

store.dispatch(
  ProfileActions.loginSuccess(session.getSession())
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <NavBar/>
        <Routes/>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
