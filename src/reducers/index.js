import { combineReducers } from 'redux';
import alert from './alert';

const appReducer = combineReducers({
  alert,
});

export default function (state, action) {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
