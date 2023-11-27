const mongoose = require("mongoose");
const achiveSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "A achivement should have an image"],
  },
  title: {
    type: String,
    required: [true, "A achivement must have a title"],
  },
  context: {
    type: String,
    required: [true, "A achivement must have a context"],
  },
});
const Achivement = mongoose.model("achivements", achiveSchema);
module.exports = Achivement;
