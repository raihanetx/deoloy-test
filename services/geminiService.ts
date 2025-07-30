
import { GoogleGenAI } from "@google/genai";
import { Product } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateProductDescription = async (product: Product): Promise<string> => {
  const prompt = `Generate a compelling, creative, and detailed product description for a digital product.
  The goal is to entice a customer to purchase it. Use markdown for formatting, like headings, bold text, and bullet points.
  
  Product Name: "${product.name}"
  Category: "${product.category}"
  Base Summary: "${product.summary}"

  Start with a catchy headline. Then, expand on the summary, highlighting key features and benefits. Explain who this product is perfect for.
  Do not mention the price. Keep the tone enthusiastic and professional.`;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          temperature: 0.7,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating product description:", error);
    return `### ${product.name}\n\n${product.summary}\n\nExperience the quality and utility of this top-tier digital product. Perfect for professionals and enthusiasts alike.`;
  }
};
