import { GoogleGenAI } from "@google/genai";

export const getLegalAssistantResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `Vi ste Virtuelni Asistent u advokatskoj kancelariji Aleksandra Rajtarova. 
        Vaša uloga je da klijentu pružite BRZE PRELIMINARNE informacije i opšte pravne smernice dok ne stupi u kontakt sa advokatom. 
        Predstavite se kao asistent advokata Rajtarova. Odgovarajte isključivo na srpskom jeziku.`,
        temperature: 0.7,
      },
    });

    return response.text || "Asistent trenutno nije dostupan.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "Došlo je do greške. Molimo zakažite konsultacije putem forme.";
  }
};