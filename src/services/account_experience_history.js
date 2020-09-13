const execSQL = require("../database").execSQL;

async function findByAccountId(accountId) {
  const results = await execSQL("SELECT * FROM exp_hist WHERE account_id=?", [
    accountId,
  ]);

  return results;
}

module.exports = {
  findByAccountId,
};
