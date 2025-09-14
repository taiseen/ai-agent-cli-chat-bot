import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

// build .env file based on these keys...

const config = {
    aiModel: process.env.AI_MODEL,
    groqApiKey: process.env.GROQ_API_KEY,
    tavilyApiKey: process.env.TAVILY_API_KEY,
};


export default config;