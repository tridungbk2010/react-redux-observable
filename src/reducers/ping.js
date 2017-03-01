/**
 * Created by chris on 3/1/17.
 */

const init = {isPinging: false};

const pingReducer = (state = init, action) => {
  switch (action.type) {
    case 'PING':
      return {isPinging: true};

    case 'PONG':
      return {isPinging: false};

    default:
      return state;
  }
};

const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000)
    .mapTo({type: 'POONG'});

const ping = () => ({type:'PING'});

export default pingReducer;
