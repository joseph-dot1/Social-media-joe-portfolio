import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume it's set.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

interface BrainstormResult {
  text: string;
  sources: GroundingChunk[];
}

export const getBrainstormIdea = async (
  prompt: string,
  isDeepDive: boolean
): Promise<BrainstormResult> => {
  const modelName = isDeepDive ? 'gemini-2.5-pro' : 'gemini-2.5-flash';

  const systemInstruction = `You are an expert social media strategist. 
  Generate a list of 3-5 creative and engaging social media post ideas based on the user's topic.
  For each idea, provide a brief description and a suggested format (e.g., Instagram Reel, LinkedIn post, Twitter thread).
  Format your response clearly using markdown.`;
  
  const fullPrompt = `${systemInstruction}\n\nTOPIC: "${prompt}"`;

  try {
    const config = isDeepDive
      ? { thinkingConfig: { thinkingBudget: 32768 } }
      : { tools: [{ googleSearch: {} }] };

    const response = await ai.models.generateContent({
      model: modelName,
      contents: fullPrompt,
      config,
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return { text, sources: groundingChunks as GroundingChunk[] };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error(
      "Failed to get a response from the AI. Please check your connection or API key and try again."
    );
  }
};