import { v4 as uuidv4 } from "uuid";
import TaskModel from "../models/lesson.js";
import puppeteer from "puppeteer";
import UserModel from "../models/user.js";
import taskTest from "../../taskTests/index.js";

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
  const { code, userId } = req.body;
  const { id } = req.params;

  try {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // TODO pridėti +1 prei bandymų completint užduotį
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "err" });
  }
  
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Listen for console events and log them to the Node.js console
    page.on('console', async (msg) => {
      const args = msg.args();
      for (let i = 0; i < args.length; ++i) {
        const arg = args[i];
        const value = await arg.jsonValue();
        console.log(`${i}: ${value}`);
      }
    });
    await page.setContent(code);
    const testToGive = taskTest[id];
    console.log(testToGive, "testToGive");
    
    const testResults = await page.evaluate((test) => {
      const testFunction = new Function(`return ${test}`)();
      return testFunction();
    }, testToGive.toString());
    console.log(testResults, "testResults");
    
    await browser.close();

    return res
      .status(200)
      .json({ message: "Tests completed", results: testResults });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
