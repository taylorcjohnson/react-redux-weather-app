
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('Action received', action);
  // redux-promise stops action, waits for promise to finish, and then
  // dispatches the returned data from the promise to the reducer as payload
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.push(action.payload.data); NO! Do not mutate state!
      //return state.concat([action.payload.data]);  // OK! Returns new state
      return [ action.payload.data, ...state ]; // ES6 spread operator (same as above)
  };
  return state;
}
