import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {loadState} from './localStorage';

export default function configureStore() {
  const persistedState = loadState();
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );
}
