const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

module.exports = app;
