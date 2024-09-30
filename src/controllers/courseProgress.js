import CourseProgressModel from "../models/courseProgress";

export const CREATE_NEW_LESSON_PROGRESS = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.findOne({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (lessonProgress) {
      return res.status(204);
    }

    const progress = new CourseProgressModel({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
      attempts: 0,
      status: "IN_PROGRESS",
    });

    return res
      .status(201)
      .json({ progress: progress, message: "Lesson progress was created" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const INCREASE_ATTEMPT_NUMBER = async (req, res) => {
  try {
    const lessonProgress = await CourseProgressModel.findOne({
      userId: req.body.userId,
      courseId: req.body.courseId,
      lessonId: req.body.lessonId,
    });

    if (!lessonProgress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    lessonProgress.attempts += 1;

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
