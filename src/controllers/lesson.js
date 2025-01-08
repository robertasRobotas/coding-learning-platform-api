import { v4 as uuidv4 } from "uuid";
import TaskModel from "../models/lesson.js";
import puppeteer from "puppeteer";
import taskTest from "../../taskTests/index.js";
import { isProgressExit, completeLesson, increaseAttempts } from "../services/progress.js";
import tests from "../../taskTests/html_css/tests.js";
import dotenv from "dotenv";

dotenv.config();

export const GET_ALL_LESSONS_BY_COURSE_ID = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ courseId: req.params.courseId }).sort({
      orderId: "asc",
    });

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

    const nextLessonId = await TaskModel.findOne({
      courseId: task.courseId,
      orderId: task.orderId + 1,
    });

    return res.status(200).json({
      message: `ok`,
      task: { ...task.toObject(), nextLessonId: nextLessonId?.id },
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
      testsId: uuidv4(),
      lessonContent_en: req.body.lessonContent_en,
      lessonContent_lt: req.body.lessonContent_lt,
      taskContent_en: req.body.taskContent_en,
      taskContent_lt: req.body.taskContent_lt,
      title_en: req.body.title_en,
      title_lt: req.body.title_lt,
      taskHintContent_en: req.body.taskHintContent_en,
      taskHintContent_lt: req.body.taskHintContent_lt,
      initialHtmlCode: req.body.initialHtmlCode,
      initialCssCode: req.body.initialCssCode,
      initialJsCode: req.body.initialJsCode,
      isHtmlEditor: req.body.isHtmlEditor,
      isCssEditor: req.body.isCssEditor,
      isJsEditor: req.body.isJsEditor,
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
  const { id } = req.params;

  try {
    let testResponse = [];

    if (Object.keys(tests.codeCheckTasks).includes(id)) {
      testResponse = tests.codeCheckTasks[id].test(code);
    }

    if (Object.keys(tests).includes(id)) {
      if (testResponse.length === 0) {
        testResponse = await runPuppeteerTest(code, id);
      } else {
        testResponse = [...testResponse, ...(await runPuppeteerTest(code, id))];
      }
    }

    const isEveryTestPassed = testResponse.every((r) => r.result);

    const isProgressExist = isProgressExit({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (!isProgressExist) {
      return res.status(404).json({ message: "Progress not found" });
    }

    if (!isEveryTestPassed) {
      await increaseAttempts({
        userId: req.body.userId,
        courseId: req.body.courseId,
        lessonId: req.body.lessonId,
      });
    }

    if (isEveryTestPassed) {
      await completeLesson({
        userId: req.body.userId,
        courseId: req.body.courseId,
        lessonId: req.body.lessonId,
      });
    }

    return res.status(200).json(testResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const runPuppeteerTest = async (code, id) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--single-process", "--no-zygote"],
    executablePath: process.env.NODE_ENV === "production" ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath(),
  });
  const page = await browser.newPage();
  await page.setContent(code.html);

  if (code.css) {
    await page.addStyleTag({ content: code.css });
  }
  if (code.js) {
    await page.addScriptTag({ content: code.js });
  }

  // Listen for console events and log them to the Node.js console
  page.on("console", async (msg) => {
    const args = msg.args();
    for (let i = 0; i < args.length; ++i) {
      const arg = args[i];
      const value = await arg.jsonValue();
      console.log(`${i}: ${value}`);
    }
  });
  const testToGive = taskTest[id].test;
  const names = taskTest[id].testNames;

  const testResults = await page.evaluate((test) => {
    const testFunction = new Function(`return ${test}`)();
    return testFunction();
  }, testToGive.toString());

  await browser.close();

  const response = Object.entries(testResults).map(([key, value]) => {
    const name = names[key];
    return {
      result: value,
      name,
    };
  });

  return response;
};

export const GET_LESSON_TEST_NAMES = async (req, res) => {
  const { id } = req.params;
  try {
    const testNames = taskTest[id]?.testNames ?? taskTest.codeCheckTasks[id].testNames;
    return res.status(200).json(Object.values(testNames));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "err" });
  }
};
