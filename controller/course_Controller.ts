import Courses from "../models/coursesSchema";
export const getCourses = async (req: any, res: any) => {
  const courses = await Courses.find().select("-__v");
  res.status(200).json({
    status: "success",
    result: courses.length,
    Data: { courses },
  });
};
export const getCourseBySlug = async (req: any, res: any) => {
  const slug = req.params.slug;
  const course = await Courses.findOne({ slug: slug }).select("-__v");
  if (!course) {
    res.status(404).json({
      status: "Fail",
      message: "Invalid Slug",
    });
  }
  res.status(200).json({
    status: "success",
    data: { course },
  });
};
