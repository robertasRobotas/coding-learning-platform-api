import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  id: { type: String, required: true },
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  lessonContent: { type: String, required: true },
  taskContent: { type: String, required: true },
  difficulty: { type: String, required: true },
  answer: { type: String, required: true },
  taskHintContent: { type: String, required: false },
  orderId: { type: Number, required: true },
  testsId: { type: String, required: true },
  durationMins: { type: Number, required: true },

  // aiAssistsCount: { type: Number, required: true },
  // submitCount: { type: Number, required: true },
});

export default mongoose.model("Lesson", taskSchema);