import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCDOBuJsp3tXU_QhpNppIAq9fKMVcXCmyQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());

