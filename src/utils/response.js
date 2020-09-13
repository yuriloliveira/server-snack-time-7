function buildResponse(data, status, success, errorMessage) {
  return {
    data: success ? data : { error_message: errorMessage },
    status,
    success,
  };
}

module.exports = {
  buildResponse,
};
