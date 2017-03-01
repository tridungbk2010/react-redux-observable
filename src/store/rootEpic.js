/**
 * Created by Chris Ho on 3/2/2017.
 */
import {combineEpics} from 'redux-observable';
import epics from '../epics';

export default combineEpics(...epics);
