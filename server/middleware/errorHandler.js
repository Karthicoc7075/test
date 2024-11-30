const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };

  console.log(err);
  
  return res.status(customError.statusCode).json(
  { message: customError.msg, statusCode: customError.statusCode}
)};

module.exports = errorHandlerMiddleware;
