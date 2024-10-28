import OpenAI from "openai";
import LessonModel from "../models/lesson.js";
import UserModel from "../models/user.js";

const { OPENAI_API_KEY } = process.env;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const GET_OPENAI_HELP = async (req, res) => {
  const { code, lessonId } = req.body;
  const { userId } = req.params;

  try {
    const lesson = await LessonModel.findOne({ id: lessonId });
    const user = await UserModel.findOne({ id: userId });
    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant for a student. You reply in 3 sentences, write in an understandable and readable manner",
      },
      {
        role: "user",
        content: `give help for this task ${lesson.lessonContent_en}, this is the students code: html: ${code.html} css: ${code.css} js: ${code.js}`,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 150,
      temperature: 1,
      n: 1,
    });

    console.log(completion);

    return res.status(200).json({ message: "success", data: completion.choices[0].message.content });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error", err: err });
  }
};
