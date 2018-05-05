import { FACEBOOK_LOGIN_SUCCESS, CLEAN_LOGIN_DATA } from '../constant';

export const storeAuthData = auth => ({
  type: FACEBOOK_LOGIN_SUCCESS,
  auth,
});

export const cleanAuthData = () => ({
  type: CLEAN_LOGIN_DATA,
});

