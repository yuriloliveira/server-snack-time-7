const bodyParser = require("body-parser");

const defaultMiddlewares = [bodyParser.json()];

module.exports = defaultMiddlewares;
