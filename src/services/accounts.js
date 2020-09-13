const execSQL = require("../database").execSQL;

async function createAccount(accountInfo) {
  const result = await execSQL(
    "INSERT INTO account_info (name, doc_number) VALUES (?, ?)",
    [accountInfo.name, accountInfo.doc_number]
  );

  return findAccountById(result.insertId);
}

async function findAccountById(accountId) {
  const account = await execSQL(
    "SELECT * FROM account_info WHERE account_id=?",
    [accountId]
  );

  return account[0];
}

module.exports = {
  createAccount,
  findAccountById,
};
