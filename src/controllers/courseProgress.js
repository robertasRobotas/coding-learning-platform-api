import CourseProgressModel from "../models/courseProgress.js";

export const CREATE_NEW_LESSON_PROGRESS = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.findOne({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
      lessonOrder: req.body.lessonOrder,
    });

    if (lessonProgress) {
      return res.status(204).send();
    }

    const progress = new CourseProgressModel({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
      lessonOrder: req.body.lessonOrder,
      attemptsCount: 0,
      aiHelpCount: 0,
      status: "IN_PROGRESS",
    });

    await progress.save();

    return res
      .status(201)
      .json({ progress: progress, message: "Lesson progress was created" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const INCREASE_COMPLETE_ATTEMPT_COUNT = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.findOne({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (!lessonProgress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    lessonProgress.attemptsCount += 1;

    const updatedProgress = await lessonProgress.save();

    return res.status(200).json({
      progress: updatedProgress,
      message: "Attempt count was increased",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const INCREASE_AI_HELP_COUNT = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.findOne({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (!lessonProgress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    lessonProgress.aiHelpCount += 1;

    const updatedProgress = await lessonProgress.save();

    return res.status(200).json({
      progress: updatedProgress,
      message: "Attempt count was increased",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const COMPLETE_LESSON = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.findOne({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (!lessonProgress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    lessonProgress.status = "COMPLETED";

    const updatedProgress = await lessonProgress.save();

    return res.status(200).json({
      progress: updatedProgress,
      message: "Lesson was completed",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const GET_HIGHEST_FINISHED_LESSON = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.find({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (!lessonProgress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    lessonProgress.status = "COMPLETED";

    const updatedProgress = await lessonProgress.save();

    return res.status(200).json({
      progress: updatedProgress,
      message: "Lesson was completed",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};
