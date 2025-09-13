import { MessagesAnnotation, StateGraph } from '@langchain/langgraph';
import { ChatGroq } from '@langchain/groq';
import readLine from 'node:readline/promises';



// Initialize the LLM
const llm = new ChatGroq({
    model: 'openai/gpt-oss-120b',
    temperature: 0, // no creativity
    maxRetries: 2,
});



// Define Nodes --> functions
async function callModelNode(state) {
    // call the LLM here & append AI response
    const aiResponseMessage = await llm.invoke(state.messages);

    // all message concatenated here...
    return { messages: [aiResponseMessage] };
}



// Define Edges --> build the graph
const workflow = new StateGraph(MessagesAnnotation)
    .addNode('agent', callModelNode)
    .addEdge('__start__', 'agent')
    .addEdge('agent', '__end__');



// Define Graph --> compile & invoke the graph
const app = workflow.compile();



async function main() {

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    while (true) {
        const userInput = await rl.question(`You: `);
        if (userInput === '/e') break;


        const finalState = await app.invoke({
            messages: [{ role: 'user', content: userInput }]
        });


        // console.log('You said: ' + JSON.stringify(finalState, null, 2));


        const lastMessage = finalState.messages[finalState.messages.length - 1];


        console.log('AI : ' + lastMessage.content);

    }

    rl.close();

};


main();