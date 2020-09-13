const express = require("express");

const signinRouter = require("./routers/signin");
const accountRouter = require("./routers/accounts");

const app = express();

app.use(signinRouter);
app.use(accountRouter);

app.listen(3001);

console.log("App listening on port 3001");
