const express = require("express");
const {
  getAllGoal,
  getAllBenefits,
  getAllAchivements,
  getAllTestimonials,
} = require("../controller/basic_Controller");
const {
  getAllCourses,
  getCourseBySlug,
} = require("../controller/courses_Controller");
const router = express.Router();
router.get("/goals", getAllGoal);
router.get("/achivements", getAllAchivements);
router.get("/benefits", getAllBenefits);
router.get("/testimonial", getAllTestimonials);
router.get("/courses", getAllCourses);
router.get("/courses/:slug", getCourseBySlug);
// authenication
router.post("/signup");
router.post("/login");
router.post("/forgotPassword");
router.patch("resetPassword");
// error page
router.route("*").all();
module.exports = router;
