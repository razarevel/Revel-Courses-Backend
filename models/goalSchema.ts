import mongoose from "mongoose";
interface Props {
  img: string;
  title: string;
  context: string;
}
const goalSchema = new mongoose.Schema<Props>({
  img: {
    type: String,
    required: [true, "A goal must have an image"],
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
export default Goal;
