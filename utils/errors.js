const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.message.data.message
    : err.message;

export { getError };
