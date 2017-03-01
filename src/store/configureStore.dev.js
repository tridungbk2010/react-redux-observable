import { createStore, compose, applyMiddleware } from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';


export default function configureStore() {
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = composeEnhancers(
    applyMiddleware(epicMiddleware)
  );
  return createStore(rootReducer, middleware);
}
