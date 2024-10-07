import mongoose from "mongoose";

const courseProgressSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  lessonId: { type: String, required: true },
  lessonOrder: { type: Number, required: true },
  attemptsCount: { type: Number, required: true },
  aiHelpCount: { type: Number, required: true },
  userId: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model("courseProgress", courseProgressSchema);
