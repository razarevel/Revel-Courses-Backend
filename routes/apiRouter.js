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
const {
  getUserBytoken,
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
} = require("../controller/auth_Controller");
const {
  contactus,
  getAllContact,
} = require("../controller/contact_Controller");
const router = express.Router();
router.get("/goals", getAllGoal);
router.get("/achivements", getAllAchivements);
router.get("/benefits", getAllBenefits);
router.get("/testimonial", getAllTestimonials);
router.get("/courses", getAllCourses);
router.get("/courses/:slug", getCourseBySlug);
// authenication
router.post("/getUserByToken", getUserBytoken);
router.post("/signup", signup);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword", resetPassword);
// contact
router.post("/contactus", contactus);
router.get("/contacts", protect, getAllContact);
// error page
router.route("*").all();
module.exports = router;
