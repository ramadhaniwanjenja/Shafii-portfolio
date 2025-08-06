import { OpenAI } from "openai";
import { SERVER_CONFIG, OPENAI_CONFIG } from "../config";

const openai = new OpenAI({
  apiKey: SERVER_CONFIG.OPENAI_API_KEY,
});

export async function processAIResponse(userMessage: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: userMessage }],
      model: OPENAI_CONFIG.model,
      temperature: OPENAI_CONFIG.temperature,
      max_tokens: OPENAI_CONFIG.max_tokens,
      presence_penalty: OPENAI_CONFIG.presence_penalty,
      frequency_penalty: OPENAI_CONFIG.frequency_penalty,
    });

    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error("No response generated from AI");
    }

    return aiResponse;
  } catch (error) {
    console.error("Error in AI processing:", error);
    throw error;
  }
}
