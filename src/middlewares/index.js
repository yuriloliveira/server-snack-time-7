const bodyParser = require("body-parser");

const buildResponse = require("../utils/response").buildResponse;

const defaultMiddlewares = [bodyParser.json()];
const errorHandlingMiddleware = (err, req, res, next) => {
  res
    .status(500)
    .json(
      buildResponse(
        null,
        500,
        false,
        (err && err.message) ||
          "Ocorreu um erro inesperado. Por favor, tente novamente."
      )
    );
};

module.exports = {
  default: defaultMiddlewares,
  errorHandling: errorHandlingMiddleware,
};
