/**
 * Created by Chris Ho on 3/2/2017.
 */
import {combineReducers} from 'redux';
import reducers from '../reducers';

export default combineReducers({
  ...reducers
});
