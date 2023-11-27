const mongoose = require("mongoose");
// videos Schema
const videoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Id number is required"],
  },
  duration: {
    type: String,
    required: [true, "Please specify the duration of video"],
  },
  context: {
    type: String,
    required: [true, "Video context is required"],
  },
});
// Section Schema
const sectionSchema = new mongoose.Schema({
  leasson: {
    type: Number,
    required: [true, "A lesson number is required"],
  },
  heading: {
    type: String,
    required: [true, "Heading of leasson is required"],
  },
  videos: [videoSchema],
});
// course Schema
const couseSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "heading must be required"],
  },
  slug: {
    type: String,
    required: [true, "A slug is required"],
    unique: true,
  },
  author: {
    type: String,
    default: "Revel",
  },
  level: {
    type: String,
    required: [true, "Please specify the level"],
    enum: ["Beginner", "Intermediate"],
  },
  weeks: {
    type: String,
    required: [true, "Please specify the weeks duation"],
  },
  images: {
    type: [String],
    required: [true, "Please specify at least 3 images"],
  },
  videoImage: String,
  message: {
    type: String,
    required: [true, "message is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  sections: [sectionSchema],
});
const Courses = mongoose.model("courses", couseSchema);
module.exports = Courses;
