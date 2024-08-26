import { v4 as uuidv4 } from "uuid";
import TaskModel from "../models/lesson.js";
import puppeteer from "puppeteer";

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
      description: req.body.description,
      difficulty: req.body.difficulty,
      answer: req.body.answer,
      hint: req.body.hint,
      orderId: req.body.orderId,
      durationMins: req.body.durationMins,
      testsId: req.body.testsId,
      lessonContent_en: req.body.lessonContent_en,
      lessonContent_lt: req.body.lessonContent_lt,
      taskContent_en: req.body.taskContent_en,
      taskContent_lt: req.body.taskContent_lt,
      title_en: req.body.title_en,
      title_lt: req.body.title_lt,
      taskHintContent_en: req.body.taskHintContent_en,
      taskHintContent_lt: req.body.taskHintContent_lt,
    };

    const response = new TaskModel(lesson);
    await response.save();

    return res.status(201).json({ message: "task was added", task: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "err" });
  }
};

export const COMPLETE_TASK = async (req, res) => {
  const { code } = req.body;
  try {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the HTML content
    await page.setContent(code);

    // Run tests on the page
    const testResults = await page.evaluate(() => {
      // Example test: Check if a specific element exists
      const elementExists = !!document.querySelector("h2");
      return {
        elementExists,
      };
    });

    // Close the browser
    await browser.close();

    // Return the test results
    return res
      .status(200)
      .json({ message: "Tests completed", results: testResults });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
