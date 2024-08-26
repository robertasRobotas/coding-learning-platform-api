import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  id: { type: String, required: true },
  courseId: { type: String, required: true },
  difficulty: { type: String, required: true },
  answer: { type: String, required: true },
  orderId: { type: Number, required: true },
  testsId: { type: String, required: true },
  durationMins: { type: Number, required: true },
  lessonContent_en: { type: String, required: true },
  lessonContent_lt: { type: String, required: true },
  taskContent_en: { type: String, required: true },
  taskContent_lt: { type: String, required: true },
  title_en: { type: String, required: true },
  title_lt: { type: String, required: true },
  taskHintContent_en: { type: String, required: false },
  taskHintContent_lt: { type: String, required: false },

  // aiAssistsCount: { type: Number, required: true },
  // submitCount: { type: Number, required: true },
});

export default mongoose.model("Lesson", taskSchema);
