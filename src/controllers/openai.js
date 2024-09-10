import OpenAI from "openai";

const { OPENAI_API_KEY } = process.env;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });


export const GET_OPENAI_HELP = async (req, res) => {
  const { code } = req.body;

  try {
  const messages = [
      { role: "system", content: "You are a helpful assistant." },
      {
          role: "user",
          content: "Write a haiku about recursion in programming.",
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
