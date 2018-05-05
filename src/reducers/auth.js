import { FACEBOOK_LOGIN_SUCCESS, CLEAN_LOGIN_DATA } from '../constant';

const initialState = {
  auth: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.auth,
      };
    case CLEAN_LOGIN_DATA:
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};

