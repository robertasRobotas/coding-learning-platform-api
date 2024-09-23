import { v4 as uuidv4 } from "uuid";
import CourseModel from "../models/course.js";
import UserModel from "../models/user.js";

export const GET_ALL_COURSES = async (req, res) => {
  try {
    const courses = await CourseModel.find();

    return res.status(200).json({ courses: courses });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

// need to test properly
export const GET_ALL_USER_COURSES = async (req, res) => {
  try {
    const courses = await UserModel.aggregate([
      { $match: { id: req.body.userId } },
      { $unwind: "$courseProgress" },
      {
        $group: {
          _id: "$_id",
          courseIds: { $addToSet: "$courseProgress.courseId" },
        },
      },
      { $project: { _id: 0, courseIds: 1 } },
    ]);

    return res.status(200).json({ courses: courses });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const GET_COURSE_BY_ID = async (req, res) => {
  try {
    const course = await CourseModel.find({ id: req.params.id });

    return res.status(200).json({ course: course });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const INSERT_COURSE = async (req, res) => {
  try {
    const course = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty,
      duration: req.body.duration,
      prerequisites: req.body.prerequisites,
      imgUrl: req.body.imgUrl,
      displayOrder: req.body.displayOrder,
      skills: req.body.skills,
      totalTasks: req.body.totalTasks,
    };

    const response = new CourseModel(course);
    await response.save();

    return res
      .status(200)
      .json({ message: "task was inserted successfully", course: response });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const ENROLL_TO_COURSE = async (req, res) => {
  try {
    const course = {
      courseId: req.body.courseId,
      lastCompletedLesson: 0,
    };

    await UserModel.findOneAndUpdate(
      { id: req.body.userId },
      { $push: { courseProgress: course } },
      { new: true }
    );

    return res.status(200).json({ message: "course was added to the user" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const UPDATE_COURSE_PROGRESS = async (req, res) => {
  try {
    await UserModel.findOneAndUpdate(
      { id: req.body.userId, "courseProgress.courseId": req.body.courseId },
      {
        $set: {
          "courseProgress.$.lastCompletedLesson": req.body.lastCompletedLesson,
        },
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "lesson was completed successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};
