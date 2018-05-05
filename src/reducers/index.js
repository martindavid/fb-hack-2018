import { combineReducers } from 'redux';
import alert from './alert';
import home from './home';

const appReducer = combineReducers({
  alert,
  home,
});

export default function (state, action) {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
