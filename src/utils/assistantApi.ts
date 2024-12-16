import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Get API key from environment variables
  dangerouslyAllowBrowser: true, // Required for use in a browser environment
});

export const getMedicalAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Using this model
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7, // Diversity of Responses
      max_tokens: 300, // Maximum length of response
    });

    return response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "An error occurred while fetching advice.";
  }
};
