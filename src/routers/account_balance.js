const express = require("express");

const middlewares = require("../middlewares/").default;
const buildResponse = require("../utils/response").buildResponse;
const accountBalanceService = require("../services/account_balance");

const router = express.Router();

router.use(middlewares);

router.get("/accounts/:accountId/balance", async (req, res, next) => {
  try {
    const { accountId } = req.params;
    const balance = await accountBalanceService.findByAccountId(accountId);
    const response = buildResponse(balance, 200, true);
    res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
