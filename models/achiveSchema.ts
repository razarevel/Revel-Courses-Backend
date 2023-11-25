import mongoose, { Schema } from "mongoose";
interface Props {
  img: string;
  title: string;
  context: string;
}
const achivSehema = new Schema<Props>({
  img: {
    type: String,
    required: [true, "You forgot to give img"],
  },
  title: {
    type: String,
    required: [true, "An Achivement Should have a title"],
  },
  context: {
    type: String,
    required: [true, "Please specify the context of achivement"],
  },
});
const Achivement = mongoose.model("Achivement", achivSehema);
export default Achivement;
