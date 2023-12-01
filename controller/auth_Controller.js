const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const sendEmail = require("../utils/email");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user, statusCode, res) => {
  const Token = signToken(user._id);
  res.cookie("jwt", Token);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    Token,
    data: { user },
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConform: req.body.passwordConform,
    });
    createSendToken(newUser, 201, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const correct = await user.correctPassword(
      req.body.password,
      user.password
    );
    if (!user || !correct)
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password",
      });
    createSendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  try {
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid Email address",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Go to reset password to update it",
    });
  } catch (err) {
    await user.save({ validateBeforeSave: false });
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.resetPassword = async (req, res) => {
  try {
    if (
      !req.body.password ||
      !req.body.passwordConform ||
      req.body.password !== req.body.passwordConform
    )
      return res.status(400).json({
        status: "fail",
        message: "Please specify the correct information",
      });
    const user = await User.findOne({ email: req.body.email });
    user.password = req.body.password;
    user.passwordConform = req.body.passwordConform;
    await user.save();
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getUserBytoken = async (req, res) => {
  try {
    const decoded = await promisify(jwt.verify)(
      req.body.token,
      process.env.JWT_SECRET
    );
    const user = await User.findOne({ _id: decoded.id });
    if (!user)
      return res.status(400).json({
        status: "fail",
        message: "Invalid Token",
      });
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Token",
    });
  }
};
exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token)
      return res.status(401).json({
        status: "fail",
        message: "Please logged In",
      });
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const currentUser = await User.findOne({ _id: decoded.id });
    if (!currentUser)
      return res.status(401).json({
        status: "fail",
        message: "The user belong to this token does no longer exist",
      });
    next();
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
