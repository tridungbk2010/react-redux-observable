/**
 * Created by Chris Ho on 3/2/2017.
 */
import * as actionTypes from '../constants/actionTypes';

const initialState = {world: ''};

export const helloWorld = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HELLO_WORLD:
      return {
        world: 'loading...'
      };
    case actionTypes.HELLO_WORLD_END:
      return {
        world: 'Hello ' + action.payload.world
      };
    default:
      return state;
  }
};
