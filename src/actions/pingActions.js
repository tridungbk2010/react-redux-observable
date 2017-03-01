/**
 * Created by chris on 3/1/17.
 */

const pingEpic = actions$ =>
  actions$.filter(action => action.type === 'PING')
    .mapTo({type: 'PONG'});

dispatch({type: 'PING'});
