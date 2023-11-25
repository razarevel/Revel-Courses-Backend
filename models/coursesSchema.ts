import mongoose, { Schema } from "mongoose";
interface Videos {
  id: number;
  heading: string;
  duration: string;
  context: string;
}
interface Sections {
  leasson: number;
  heading: String;
  videos: any[];
}
interface Props {
  heading: string;
  slug: string;
  author: string;
  level: string;
  weeks: string;
  images: string[];
  videoImage: string;
  message: string;
  description: string;
  sections: any[];
}
const videosSehema = new Schema<Videos>({
  id: {
    type: Number,
    required: [true, "Please specify the if of videos"],
  },
  heading: {
    type: String,
    required: [true, "Please specify the heading for video"],
  },
  duration: {
    type: String,
    required: [true, "Please specify the duration for the videos"],
  },
  context: {
    type: String,
    required: [true, "PLease specify the context for the videos"],
  },
});
const SectionSchema = new Schema<Sections>({
  leasson: {
    type: Number,
    required: [true, "Please specify the lesson number"],
  },
  heading: {
    type: String,
    required: [true, "Please specify the heading of lesson"],
  },
  videos: [videosSehema],
});
const courseSchema = new Schema<Props>({
  heading: {
    type: String,
    required: [true, "A course should have a heading"],
  },
  slug: {
    type: String,
    required: [true, "A course must contain a slug"],
  },
  author: {
    type: String,
    default: "Revel",
  },
  level: {
    type: String,
    required: [true, "A course must have an author"],
    enum: ["Beginner", "Intermediate"],
  },
  weeks: {
    type: String,
    required: [true, "A course must have a week duration"],
  },
  images: {
    type: [String],
    required: [true, "A course must have atleat three images"],
  },
  videoImage: {
    type: String,
    default: "Videos Image",
  },
  message: {
    type: String,
    required: [true, "A message is required for the course"],
  },
  description: {
    type: String,
    required: [true, "A description is required for the course"],
  },
  sections: [SectionSchema],
});
const Courses = mongoose.model("Courses", courseSchema);
export default Courses;
