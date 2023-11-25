import mongoose from "mongoose";
import app from "./app";
const DB = `mongodb+srv://revel:71JWoc7bREKEBUna@revelcourses.2bb1mdn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DB).then(() => console.log("DB connection successfull"));
app.listen(3000, () => {
  console.log("Listen to port 3000");
});
