const sendError = (statusCode, error, res) => {
  res.status(statusCode);
  throw new Error(error);
};

module.exports = sendError;
