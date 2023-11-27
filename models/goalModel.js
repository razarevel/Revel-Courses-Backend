const mongoose = require("mongoose");
const goalSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "A goal should have an image"],
  },
  title: {
    type: String,
    required: [true, "A goal must have a title"],
  },
  context: {
    type: String,
    required: [true, "A goal must have a context"],
  },
});
const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;
