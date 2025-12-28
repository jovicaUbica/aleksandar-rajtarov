import { GoogleGenAI } from "@google/genai";

export const getLegalAssistantResponse = async (userMessage: string) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Gemini API Key is MISSING!");
      return "Greška: Nedostaje API ključ.";
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash-001',
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
    console.error("Gemini API Error Details:", error);
    if (error.message) console.error("Error Message:", error.message);
    return "Došlo je do greške. Molimo zakažite konsultacije putem forme.";
  }
};