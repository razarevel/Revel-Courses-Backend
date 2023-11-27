const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
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
const port = 8000;
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
