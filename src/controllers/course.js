import { v4 as uuidv4 } from "uuid";
import CourseModel from "../models/course.js";

export const GET_ALL_COURSES = async (req, res) => {
  try {
    const courses = new CourseModel.find();

    return res.status(200).json({ courses: courses });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

// TODO
export const GET_ALL_USER_COURSES = async (req, res) => {
  try {
    const courses = new CourseModel.find({});

    return res.status(200).json({ courses: courses });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const GET_COURSE_BY_ID = async (req, res) => {
  try {
    const course = new CourseModel.find({ id: req.params.id });

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
      title: req.body.course,
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

    return res
      .status(200)
      .json({ message: "task was inserted successfully", course: response });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};
