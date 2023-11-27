const Goal = require("../models/goalModel");
const Benefit = require("../models/benefitModel");
const Achivement = require("../models/achviementModel");
const Testimonials = require("../models/testimonialModule");
exports.getAllGoal = async (req, res) => {
  const goals = await Goal.find().select("-__v");
  res.status(200).json({
    status: "success",
    result: Goal.length,
    data: { goals },
  });
};
exports.getAllBenefits = async (req, res) => {
  const benefit = await Benefit.find().sort({ number: 1 }).select("-__v");
  res.status(200).json({
    status: "success",
    result: benefit.length,
    data: { benefit },
  });
};
exports.getAllAchivements = async (req, res) => {
  const achivement = await Achivement.find().select("-__v");
  res.status(200).json({
    status: "success",
    result: achivement.length,
    data: { achivement },
  });
};
exports.getAllTestimonials = async (req, res) => {
  let testimonials = "";
  if (req.query.paginate) {
    testimonials = await Testimonials.find().select("-__v").limit(2);
  }
  res.status(200).json({
    status: "success",
    result: testimonials.length,
    data: { testimonials },
  });
};
