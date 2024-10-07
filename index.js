import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import lessonRoutes from "./src/routes/lesson.js";
import courseRoutes from "./src/routes/course.js";
import userRoutes from "./src/routes/user.js";
import openAiRoutes from "./src/routes/openai.js";
import progressRoutes from "./src/routes/courseProgress.js";

import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log("ERR: ", err);
  });

app.use(userRoutes);
app.use(lessonRoutes);
app.use(courseRoutes);
app.use(openAiRoutes);
app.use(progressRoutes);

app.use((req, res) => {
  return res.status(404).json({ message: "This endpoint des not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("App started on port", process.env.PORT);
});
