const express = require("express");

const signinRouter = require("./routers/signin");
const accountRouter = require("./routers/accounts");
const accountBalanceRouter = require("./routers/account_balance");
const accountExperienceHistoryRouter = require("./routers/account_experience_history");
const completeAccountService = require("./routers/account_complete");
const errorHandlingMiddleware = require("./middlewares/index").errorHandling;

const app = express();

app.use(signinRouter);
app.use(accountRouter);
app.use(accountBalanceRouter);
app.use(accountExperienceHistoryRouter);
app.use(completeAccountService);
app.use(errorHandlingMiddleware);

app.listen(3001);

console.log("App listening on port 3001");
