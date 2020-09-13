const execSQL = require("../database").execSQL;

async function findByAccountId(accountId) {
  const results = await execSQL("SELECT * FROM balance WHERE account_id=?", [
    accountId,
  ]);

  return results[0];
}

module.exports = {
  findByAccountId,
};
