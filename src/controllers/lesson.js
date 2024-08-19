import { v4 as uuidv4 } from "uuid";
import TaskModel from "../models/lesson.js";

export const GET_ALL_LESSONS_BY_COURSE_ID = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ courseId: req.params.courseId });

    return res.status(200).json({
      message: `All course ${req.params.courseId} tasks`,
      tasks: tasks,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error", err: err });
  }
};

export const GET_LESSON_BY_ID = async (req, res) => {
  try {
    const task = await TaskModel.findOne({ id: req.params.id });

    return res.status(200).json({
      message: `ok`,
      task: task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "err" });
  }
};

export const INSERT_LESSON = async (req, res) => {
  try {
    const lesson = {
      id: uuidv4(),
      courseId: req.body.courseId,
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty,
      answer: req.body.answer,
      hint: req.body.hint,
      orderId: req.body.orderId,
      durationMins: req.body.durationMins,
      testsId: req.body.testsId,
      taskHintContent: req.body.taskHintContent,
      taskContent: req.body.taskContent,
      lessonContent: req.body.lessonContent,
    };

    const response = new TaskModel(lesson);
    await response.save();

    return res.status(200).json({ message: "task was saved", task: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "err" });
  }
};

export const DELETE_TASK_BY_ID = async (req, res) => {
  try {
    const task = new TaskModel.deleteOne({ id: req.params.id });

    return res.status(200).json({
      message: `deleted`,
      response: task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "err" });
  }
};
