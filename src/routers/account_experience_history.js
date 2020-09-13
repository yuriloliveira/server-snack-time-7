const express = require("express");

const middlewares = require("../middlewares").default;
const buildResponse = require("../utils/response").buildResponse;
const accountExperienceHistory = require("../services/account_experience_history");

const router = express.Router();

router.use(middlewares);

router.get(
  "/accounts/:accountId/experience_history",
  async (req, res, next) => {
    try {
      const { accountId } = req.params;
      const history = await accountExperienceHistory.findByAccountId(accountId);
      const response = buildResponse(history, 200, true);
      res.status(response.status).json(response);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
