import { combineReducers } from 'redux';
import alert from './alert';
import home from './home';
import auth from './auth';

const appReducer = combineReducers({
  alert,
  home,
  auth,
});

export default function (state, action) {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
