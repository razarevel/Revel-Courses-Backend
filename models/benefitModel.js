const mongoose = require("mongoose");
const benefitSchema = new mongoose.Schema({
  number: {
    type: String,
    required: [true, "A benefit must have a number"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "A benefit must have a title"],
  },
  description: {
    type: String,
    required: [true, "A Description is required"],
  },
});
const Benefit = mongoose.model("Benefits", benefitSchema);
module.exports = Benefit;
