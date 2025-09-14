import { ChatGroq } from "@langchain/groq";
import config from "../config/index.js";


const llmConfig = {
    temperature: 0, // no creativity
    maxRetries: 2,
    apiKey: config.groqApiKey,
    model: config.aiModel,
};


// Initialize the LLM
export const llm = new ChatGroq(llmConfig);