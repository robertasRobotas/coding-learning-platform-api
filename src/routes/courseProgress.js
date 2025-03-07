import express from "express";
import {
  CREATE_NEW_LESSON_PROGRESS,
  INCREASE_COMPLETE_ATTEMPT_COUNT,
  COMPLETE_LESSON,
  GET_HIGHEST_FINISHED_LESSON,
  INCREASE_AI_HELP_COUNT,
  GET_USER_PROGRESS,
  GET_IS_COURSE_FINISHED_STATUS,
} from "../controllers/courseProgress.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/progress", auth, CREATE_NEW_LESSON_PROGRESS);
router.get("/progress/:courseId/:userId/:lessonId", auth, GET_USER_PROGRESS);
router.put("/atempt/increase", auth, INCREASE_COMPLETE_ATTEMPT_COUNT);
router.put("/help/increase", auth, INCREASE_AI_HELP_COUNT);
router.post("/complete/lesson", auth, COMPLETE_LESSON);
router.get("/progress/:courseId", auth, GET_HIGHEST_FINISHED_LESSON);
router.get(
  "/progress/course/status/:courseId/:userId",
  auth,
  GET_IS_COURSE_FINISHED_STATUS
);

export default router;
