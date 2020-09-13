const express = require("express");
const jwt = require("jsonwebtoken");

const accountService = require("../services/accounts");
const middlewares = require("../middlewares/");
const buildResponse = require("../utils/response").buildResponse;

const router = express.Router();

router.use(middlewares);

router.post("/accounts", async (req, res) => {
  try {
    const results = await accountService.createAccount(req.body);
    const response = buildResponse(results, 201, true);
    res.status(response.status).json(response);
  } catch (err) {
    console.error(err);
    const response = buildResponse(
      null,
      500,
      false,
      err.message || "Não foi possível criar a conta"
    );
    res.status(response.status).json(response);
  }
});

router.get("/accounts/:accountId", async (req, res) => {
  try {
    const { accountId } = req.params;
    const result = await accountService.findAccountById(accountId);

    const response = buildResponse(result, 200, true);
    res.status(response.status).json(response);
  } catch (err) {
    console.error(err);
    const response = buildResponse(
      null,
      500,
      false,
      err.message || "Não foi possível criar a conta"
    );
    res.status(response.status).json(response);
  }
});

module.exports = router;
