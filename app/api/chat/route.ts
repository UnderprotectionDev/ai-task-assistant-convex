import SYSTEM_MESSAGE from "@/constants/system-message";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { taskTools } from "@/ai/tools";
export const maxDuration = 30;

export const POST = async (req: Request) => {
  const { messages } = await req.json();

  const response = streamText({
    model: openai("gpt-4o-mini"),
    system: SYSTEM_MESSAGE,
    messages: messages,
    tools: taskTools,
    maxSteps: 5,
    toolChoice: "auto",
    // temperature: 0,
    temperature: 0.3,
    // maxTokens: 1024,
  });

  return response.toDataStreamResponse();
};
