import mongoose from "mongoose";
interface Props {
  number: number;
  title: string;
  description: string;
}
const benefitSchem = new mongoose.Schema<Props>({
  number: {
    type: Number,
    required: [true, "A benefit should have a number"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "A benefit should have a title"],
  },
  description: {
    type: String,
    required: [true, "A number should have a description"],
  },
});
const Benefit = mongoose.model("Benefit", benefitSchem);
export default Benefit;
