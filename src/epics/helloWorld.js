/**
 * Created by Chris Ho on 3/2/2017.
 */
import {Observable} from "rxjs/Observable";
import * as actionTypes from "../constants/actionTypes";

export const helloWorld = action$ => action$
  .ofType(actionTypes.HELLO_WORLD)
  .switchMap(() => Observable
    .timer(500)
    .map(() => ({
      type: actionTypes.HELLO_WORLD_END,
      payload: {
        world: 'World'
      }
    }))
  );
