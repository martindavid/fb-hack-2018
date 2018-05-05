import { IMAGE_UPLOAD_SUCCESS } from '../constant';

const initialState = {
  captureImage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        captureImage: action.image,
      };
    default:
      return state;
  }
};

