import { GoogleGenAI, Type } from "@google/genai";
import { Article } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é um jornalista esportivo renomado e especialista em "Camisas de Futebol Vintage e Retrô" (Classic Football Kits/Jerseys).
Seu estilo de escrita é apaixonado, detalhista e focado na nostalgia, cultura do futebol, design têxtil e história das camisas clássicas.
Você escreve para um blog brasileiro chamado "Meu Camisa 10".
Seus artigos devem ser formatados em Markdown limpo.
`;

export const generateArticle = async (topic: string): Promise<Omit<Article, 'id' | 'imageUrl' | 'date'>> => {
  try {
    const prompt = `Escreva um artigo de blog completo, envolvente e otimizado para SEO sobre: "${topic}".
    
    O artigo deve conter:
    1. Um título criativo e chamativo.
    2. Um resumo (excerpt) curto de 2 linhas.
    3. O conteúdo principal dividido em subtítulos (use ##).
    4. Uma categoria entre: 'História', 'Review', 'Lançamento', 'Conceito'.
    5. Tempo de leitura estimado.
    
    Responda APENAS com um JSON estrito seguindo este schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            content: { type: Type.STRING },
            category: { type: Type.STRING, enum: ['Review', 'História', 'Lançamento', 'Conceito'] },
            readTime: { type: Type.STRING },
            author: { type: Type.STRING }
          },
          required: ["title", "excerpt", "content", "category", "readTime", "author"]
        }
      }
    });

    if (!response.text) {
      throw new Error("Não foi possível gerar o conteúdo.");
    }

    const data = JSON.parse(response.text);
    
    return {
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category as any,
      readTime: data.readTime,
      author: data.author || "IA Redação"
    };

  } catch (error) {
    console.error("Erro ao gerar artigo:", error);
    throw error;
  }
};