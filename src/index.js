/* eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import "./styles/styles.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
require('./favicons/favicon-16x16.png');
require('./favicons/favicon-32x32.png');
require('./favicons/favicon.ico');
require('./favicons/android-chrome-192x192.png');
require('./favicons/apple-touch-icon.png');
import {saveState} from './store/localStorage';
import throttle from 'lodash/throttle';

const store = configureStore();
store.subscribe(throttle(() => {
  saveState({
    loginReducer: store.getState().loginReducer,
    planReducer:store.getState().planReducer,
    tabReducer:store.getState().tabReducer,
    packagesReducer:store.getState().packagesReducer
  });
}, 500));

render(
  <Provider store={store}>
    <Router  history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
);
