import mongoose, { Schema } from "mongoose";
import express from "express";
import fs from "fs";
import Achivement from "./models/achiveSchema";
import getAchivements from "./controller/achive_Controller";
import getGoal from "./controller/goal_Controller";
import getBenefit from "./controller/benefit_Controller";
import { getCourseBySlug, getCourses } from "./controller/course_Controller";
// interface

// connection to database

// creating server
const app = express();
app.get("/api/achivement", getAchivements);
app.get("/api/goals", getGoal);
app.get("/api/benefits", getBenefit);
app.get("/api/courses", getCourses);
app.get("/api/courses/:slug", getCourseBySlug);
app.route("*").all((req, res) => {
  res.status(400).json({
    status: "fail",
    message: "Inavlid route",
  });
});
export default app;
