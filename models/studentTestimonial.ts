import mongoose from "mongoose";
interface Props {
  img: string;
  context: string;
  name: string;
}
const studentTestimonialSchema = new mongoose.Schema<Props>({
  img: {
    type: String,
    required: [true, "A testimonial should have an image"],
  },
  context: {
    type: String,
    require: [true, "A testimonial shouild have context"],
  },
  name: {
    type: String,
    required: [true, "A testimonial should have a name"],
  },
});
const StudentTestimonial = mongoose.model(
  "StudentTestimonial",
  studentTestimonialSchema
);
export default StudentTestimonial;
