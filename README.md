> 13 - September - 2025

# AI Agent - CLI ChatBot

An intelligent conversational agent powered by LangGraph + Groq.

## 🌟 Features

1. A user can have chat with the Agent
2. Agent can browse the internet
3. Agent can remember the full conversation

### 🤖 AI Agent

> 💡 This is not just a chatbot — it's an **AI agent**:  

- `LLM` ==> is the brain
- `Tools` ==> is hand (can perform ***actions*** like browsing)
- `LLM` + `Tools` ==> `AI Agent`
- [Lang-Graph][langGraph] is especially use for building `AI Agent`
  - The nervous system that coordinates thoughts & ***actions***

[langGraph]:https://www.langchain.com

### 📦 Packages

| Packages                      | Usage                                    |
|-------------------------------|------------------------------------------|
| bun add @langchain/core       | Core utils (for prompts, messages, etc.) |
| bun add @langchain/langgraph  | Manage stateful conversation flow        |
| bun add @langchain/groq       | Connects fast with LLMs                  |

> To install dependencies:

This project was created using `bun init`

```bash
bun install
```

To run:

```bash
bun run index.js
```

Node version run system

```js
node --env-file=.env ./src/index.js 
```

### 🌐 References

- [Js LangChain Doc](https://js.langchain.com/docs/integrations/chat/groq)
- [Groq API Key](https://console.groq.com/keys)
- [Tavily API Key](https://app.tavily.com/home)
- [Tavily Doc](https://docs.tavily.com/documentation/about)

### ✅ Final Checklist Before Running

> create `.env` file with proper `key = value`
