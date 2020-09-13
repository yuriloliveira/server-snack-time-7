const express = require("express");

const rouletteService = require("../services/roulette");
const middlewares = require("../middlewares/").default;
const buildResponse = require("../utils/response").buildResponse;

const router = express.Router();

router.use(middlewares);

router.get("/roulette/questions/random", async (req, res, next) => {
  try {
    const { accountId } = req.params;
    const result = await rouletteService.findRandomQuestion(accountId);

    const response = buildResponse(result, 200, true);
    res.status(response.status).json(response);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post(
  "/roulette/questions/:questionId/alternatives/:alternativeId",
  async (req, res, next) => {
    try {
      const { questionId, alternativeId } = req.params;
      const isCorrectAnswer = await rouletteService.answerQuestion(
        questionId,
        alternativeId
      );

      const response = buildResponse(isCorrectAnswer, 200, true);
      res.status(response.status).json(response);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
);

module.exports = router;
