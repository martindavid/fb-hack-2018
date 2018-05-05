import { IMAGE_UPLOAD_SUCCESS } from '../constant';


export const uploadImageSuccess = image => ({
  type: IMAGE_UPLOAD_SUCCESS,
  image,
});
