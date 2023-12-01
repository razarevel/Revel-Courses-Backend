const mongoose = require("mongoose");
const User = require("./userModel");
const contacts = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Please specify the subject"],
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
});
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your name"],
  },
  lastName: String,
  email: {
    type: String,
    require: [true, "Please provide an email"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  contactsArray: [contacts],
});
// contactSchema.pre("save", async function (next) {
//   const user = await User.findOne({ email: this.email });
//   if (!user) return new Error("Invalid Email");
// });
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
