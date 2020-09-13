const execSQL = require("../database").execSQL;

async function findAccountById(accountId) {
  const account = await execSQL("SELECT * FROM final_base WHERE account_id=?", [
    accountId,
  ]);

  return account[0];
}

module.exports = {
  findAccountById,
};
