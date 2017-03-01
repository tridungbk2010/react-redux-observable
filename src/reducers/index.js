import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import ajaxCallsInProgress from "./ajaxStatusReducer";
import ping,{} from './ping';

const rootReducer = combineReducers({
  ajaxCallsInProgress
});

export default rootReducer;
