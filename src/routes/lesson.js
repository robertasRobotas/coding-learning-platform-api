import express from "express";
import {
  GET_ALL_LESSONS_BY_COURSE_ID,
  INSERT_LESSON,
  GET_LESSON_BY_ID,
  COMPLETE_TASK,
  GET_LESSON_TEST_NAMES,
  // DELETE_TASK_BY_ID,
} from "../controllers/lesson.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/lessons/course/:courseId", auth, GET_ALL_LESSONS_BY_COURSE_ID);
router.get("/lessons/:id", auth, GET_LESSON_BY_ID);
router.post("/lessons", auth, INSERT_LESSON);

router.post("/lessons/:id/complete", COMPLETE_TASK)
router.get("/lessons/:id/testsNames", GET_LESSON_TEST_NAMES)
// router.delete("/tasks/:id", auth, DELETE_GAME_BY_ID);

export default router;
