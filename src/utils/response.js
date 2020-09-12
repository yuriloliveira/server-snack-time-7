function buildResponse(data, status, success, errorMessage) {
  return {
    data: {
      ...data,
      ...(!success && { error_message: errorMessage }),
    },
    status,
    success,
  };
}

module.exports = {
  buildResponse,
};
