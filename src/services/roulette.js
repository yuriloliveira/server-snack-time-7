const execSQL = require("../database").execSQL;

async function findRandomQuestion() {
  const randomQuestion = (
    await execSQL("SELECT * FROM questions ORDER BY RAND() LIMIT 1")
  )[0];

  const alternatives = await execSQL(
    "SELECT * FROM question_alternatives WHERE question_id=? ORDER BY RAND()",
    [randomQuestion.question_id]
  );

  return {
    ...randomQuestion,
    alternatives: alternatives.map(
      ({ correct_answer, ...alternative }) => alternative
    ),
  };
}

async function answerQuestion(questionId, answerId) {
  const result = (
    await execSQL(
      "SELECT COUNT(1) as questionCount FROM question_alternatives WHERE question_id=? AND alternative_id=? AND correct_answer is true;",
      [questionId, answerId]
    )
  )[0];

  return result.questionCount > 0;
}

module.exports = {
  findRandomQuestion,
  answerQuestion,
};
