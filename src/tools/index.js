import { TavilySearch } from "@langchain/tavily";


const tool = new TavilySearch({
    maxResults: 3,
    topic: 'general',
    // includeAnswer: false,
    // includeRawContent: false,
    // includeImages: false,
    // includeImageDescriptions: false,
    // searchDepth: "basic",
    // timeRange: "day",
    // includeDomains: [],
    // excludeDomains: [],

});


// Initialize the tool node
// and AI Agent have multiple tools
// send this tools to AI-Model & inside LangGraph as a Node (function)

export const tools = [tool];