import { FETCH_DATA_IN_PROGRESS, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, CLEANUP_DATA } from '../constant';
import { checkHttpStatus, parseJSON } from '../utils';

const fetchDataInProgress = isFetching => ({
  type: FETCH_DATA_IN_PROGRESS,
  isFetching,
});


const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

const fetchDataError = error => ({
  type: FETCH_DATA_FAILED,
  error,
});

export const cleanUpSuggestionData = () => ({
  type: CLEANUP_DATA,
});

export const fetchImageInformation = image => (dispatch) => {
  dispatch(fetchDataInProgress(true));
  const data = new FormData(); // eslint-disable-line
  data.append('image', image);
  return fetch('http://localhost:5000/vision', {
    method: 'POST',
    body: data,
  })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then((response) => {
      dispatch(fetchDataInProgress(false));
      dispatch(fetchDataSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchDataInProgress(false));
      dispatch(fetchDataError(error.message));
    });
};

