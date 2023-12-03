const express = require("express");
const apiRouter = require("./routes/apiRouter");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

// connect to mongooses
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => console.log("Successfully connected to DB"))
  .catch((err) => console.log(err.message));
// listen to server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
