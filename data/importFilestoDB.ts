import mongoose from "mongoose";
import fs from "fs";
import Achivement from "../models/achiveSchema";
import Goal from "../models/goalSchema";
import StudentTestimonial from "../models/studentTestimonial";
import Benefit from "../models/benefit";
import Courses from "../models/coursesSchema";
const DB = `mongodb+srv://revel:71JWoc7bREKEBUna@revelcourses.2bb1mdn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DB).then(() => console.log("DB connection successfull"));
const achivement = JSON.parse(
  fs.readFileSync(`${__dirname}/achivement.json`, "utf-8")
);
const goal = JSON.parse(fs.readFileSync(`${__dirname}/goal.json`, "utf-8"));
const studentTestimonial = JSON.parse(
  fs.readFileSync(`${__dirname}/studentTestimonials.json`, "utf-8")
);
const benefit = JSON.parse(
  fs.readFileSync(`${__dirname}/benefits.json`, "utf-8")
);
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/courses.json`, "utf-8")
);
const importData = async () => {
  try {
    // await Goal.create(goal);
    // await Achivement.create(achivement);
    // await StudentTestimonial.create(studentTestimonial);
    // await Benefit.create(benefit);
    await Courses.create(courses);
    console.log("imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Achivement.deleteMany();
    await Goal.deleteMany();
    await StudentTestimonial.deleteMany();
    await Benefit.deleteMany();
    await Courses.deleteMany();
    console.log("Deleted");
  } catch (err) {}
  process.exit();
};
if (process.argv[2] === "--import") importData();
else if (process.argv[2] === "--delete") deleteData();
