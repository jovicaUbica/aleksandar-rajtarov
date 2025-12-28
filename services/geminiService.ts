import { GoogleGenerativeAI } from "@google/generative-ai";

export const getLegalAssistantResponse = async (userMessage: string) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Gemini API Key is MISSING!");
      return "Greška: Nedostaje API ključ.";
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `Vi ste Virtuelni Asistent u advokatskoj kancelariji Aleksandra Rajtarova. 
        Vaša uloga je da klijentu pružite BRZE PRELIMINARNE informacije i opšte pravne smernice dok ne stupi u kontakt sa advokatom. 
        Predstavite se kao asistent advokata Rajtarova. Odgovarajte isključivo na srpskom jeziku.`,
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;

    return response.text() || "Asistent trenutno nije dostupan.";
  } catch (error: any) {
    console.error("Gemini API Error Details:", error);
    if (error.message) console.error("Error Message:", error.message);
    return "Došlo je do greške. Molimo zakažite konsultacije putem forme.";
  }
};