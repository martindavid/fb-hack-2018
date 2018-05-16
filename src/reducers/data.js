import { FETCH_DATA_IN_PROGRESS, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, CLEANUP_DATA } from '../constant';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_IN_PROGRESS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case FETCH_DATA_FAILED:
      console.log(action);
      return {
        ...state,
        error: action.error,
      };
    case CLEANUP_DATA:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

