import express from "express";
import {
  GET_ALL_COURSES,
  GET_ALL_USER_COURSES,
  GET_COURSE_BY_ID,
  INSERT_COURSE,
  ENROLL_TO_COURSE,
  // DELETE_COURSE_BY_ID,
} from "../controllers/course.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/courses", auth, GET_ALL_COURSES);
router.get("/courses/user", auth, GET_ALL_USER_COURSES);
router.get("/courses/:id", auth, GET_COURSE_BY_ID);
router.post("/courses", auth, INSERT_COURSE);
router.post("/courses/enroll", auth, ENROLL_TO_COURSE);
// router.delete("/courses/:id", auth, DELETE_COURSE_BY_ID);

export default router;
