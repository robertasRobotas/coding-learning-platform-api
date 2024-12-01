import CourseProgressModel from "../models/courseProgress.js";

export const isProgressExit = async ({ userId, courseId, lessonId }) => {
  const lessonProgress = await CourseProgressModel.findOne({
    userId: userId,
    courseId: courseId,
    lessonId: lessonId,
  });

  if (!lessonProgress) {
    return false;
  }
};

export const completeLesson = async ({ userId, courseId, lessonId }) => {
  const lessonProgress = await CourseProgressModel.findOne({
    userId: userId,
    courseId: courseId,
    lessonId: lessonId,
  });

  lessonProgress.status = "COMPLETED";

  const updatedProgress = await lessonProgress.save();

  return {
    progress: updatedProgress,
    message: "Lesson was completed",
  };
};

export const increaseAttempts = async ({ userId, courseId, lessonId }) => {
  const lessonProgress = await CourseProgressModel.findOne({
    userId: userId,
    courseId: courseId,
    lessonId: lessonId,
  });

  let updatedProgress;
  if (lessonProgress.status !== "COMPLETED") {
    lessonProgress.attemptsCount = lessonProgress.attemptsCount + 1;
    updatedProgress = await lessonProgress.save();
  }

  return {
    progress: updatedProgress || lessonProgress,
    message: "Lesson was completed",
  };
};
