const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.json({
    success: false,
    message: err.message,
  });
};

module.exports = errorHandler;
