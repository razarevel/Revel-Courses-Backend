const mongoose = require("mongoose");
const testimonialSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "Image is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  message: {
    type: String,
    required: [true, "Message must is required"],
  },
});
const Testimonials = mongoose.model("Testimonials", testimonialSchema);
module.exports = Testimonials;
