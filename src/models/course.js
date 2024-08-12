import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: String, required: true },
  prerequisites: { type: Array, required: true },
  imgUrl: { type: String, required: true },
  displayOrder: { type: Number, required: true },
  skills: { type: Array, required: true },
  totalTasks: { type: Number, required: true },
});

export default mongoose.model("Course", courseSchema);
