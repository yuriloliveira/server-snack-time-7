const express = require("express");

const middlewares = require("../middlewares").default;
const buildResponse = require("../utils/response").buildResponse;
const completeAccountService = require("../services/account_complete");

const router = express.Router();

router.use(middlewares);

router.get("/accounts/:accountId/complete", async (req, res, next) => {
  try {
    const { accountId } = req.params;
    const patent = await completeAccountService.findAccountById(accountId);
    const response = buildResponse(patent, 200, true);
    res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
