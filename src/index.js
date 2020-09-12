const express = require("express");

const signinRouter = require("./signin");

const app = express();

app.use("/signin/", signinRouter);

app.listen(3000);

console.log("App listening on port 3000");
