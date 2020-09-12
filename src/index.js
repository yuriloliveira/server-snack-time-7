const express = require("express");

const signinRouter = require("./routers/signin");
const accountRouter = require("./routers/accounts");

const app = express();

app.use("/signin/", signinRouter);
app.use("/accounts", accountRouter);

app.listen(3001);

console.log("App listening on port 3001");
