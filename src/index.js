const express = require("express");

const signinRouter = require("./routers/signin");
const accountRouter = require("./routers/accounts");
const accountBalanceRouter = require("./routers/account_balance");

const app = express();

app.use(signinRouter);
app.use(accountRouter);
app.use(accountBalanceRouter);

app.listen(3001);

console.log("App listening on port 3001");
