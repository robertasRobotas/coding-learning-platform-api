import express from "express";
import {
  GET_ALL_TASKS_BY_COURSE_ID,
  INSERT_TASK,
  GET_TASK_BY_ID,
  // DELETE_TASK_BY_ID,
} from "../controllers/task.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/tasks/course/:courseId", auth, GET_ALL_TASKS_BY_COURSE_ID);
router.get("/tasks/:id", auth, GET_TASK_BY_ID);
router.post("/tasks", auth, INSERT_TASK);
// router.delete("/tasks/:id", auth, DELETE_GAME_BY_ID);

export default router;
