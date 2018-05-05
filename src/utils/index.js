export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  Raven.captureException(error, { extra: response }); // eslint-disable-line
  throw error;
}

export function parseJSON(response) {
  return response.json();
}
