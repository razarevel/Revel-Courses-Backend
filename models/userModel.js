const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please specify your name"],
  },
  email: {
    type: String,
    required: [true, "Please specify you email"],
  },
  password: {
    type: String,
    required: [true, "A password is required"],
  },
  passwordConform: {
    type: String,
    required: [true, "Conform Password is required"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not the smae ",
    },
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConform = undefined;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
