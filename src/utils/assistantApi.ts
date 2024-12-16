import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // 環境変数からAPIキーを取得
  dangerouslyAllowBrowser: true, // ブラウザ環境で使う場合に必要
});

export const getMedicalAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // 使用するモデル
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7, // 応答の多様性
      max_tokens: 300, // 応答の最大長さ
    });

    return response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "An error occurred while fetching advice.";
  }
};
