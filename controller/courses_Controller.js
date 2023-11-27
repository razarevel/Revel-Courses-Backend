const Courses = require("../models/coursesModel");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/appError");
exports.getAllCourses = async (req, res) => {
  let course = "";
  if (req.query.fields) {
    let fields = req.query.fields;
    fields = fields.split(",").join(" ");
    course = await Courses.find().select(fields);
  } else {
    course = await Courses.find().select("-__v");
  }
  res.status(200).json({
    status: "success",
    result: course.length,
    data: { course },
  });
};
exports.getCourseBySlug = catchAsync(async (req, res, next) => {
  const course = await Courses.findOne({ slug: req.params.slug }).select(
    "-__v"
  );
  if (!course) return next(new ApiError("Invalid Slug", 404));
  res.status(200).json({
    status: "success",
    data: { course },
  });
});
