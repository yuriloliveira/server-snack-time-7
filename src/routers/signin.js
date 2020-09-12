const express = require("express");
const jwt = require("jsonwebtoken");

const middlewares = require("../middlewares/");
const buildResponse = require("../utils/response").buildResponse;

const JWT_SECRET = "secret";
const TOKEN_EXPIRATION_DAY_COUNT = 7;

const router = express.Router();

router.use(middlewares);

router.post("/", (req, res) => {
  try {
    const { email, password } = req.body;

    console.log({ body: req.body });

    if (!email || !password) {
      res
        .status(401)
        .json(buildResponse(null, 401, false, "Email e/ou senha inválidos"));
    }

    const token = jwt.sign(
      {
        data: {
          email,
          password,
        },
        // Signs the token with TOKEN_EXPIRATION_DAY_COUNT days of expiration
        exp:
          (Math.floor(Date.now() / 1000) + 3600 * 24) *
          TOKEN_EXPIRATION_DAY_COUNT,
      },
      JWT_SECRET
    );

    const response = buildResponse({ token }, 200, true);
    res.status(response.status).json(response);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
