import { MessagesAnnotation, StateGraph } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import readLine from 'node:readline/promises';



// Define Nodes --> functions
const callModelNode = async (state) => {

    console.log('calling model');

    return state
}


// Define Edges --> build the graph
const workflowOfGraph = new StateGraph(MessagesAnnotation)
    .addNode('agent', callModelNode)
    .addEdge('__start__', 'agent')
    .addEdge('agent', '__end__');


// Define Graph --> compile & invoke the graph
const app = workflowOfGraph.compile();


const main = async () => {

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    while (true) {
        const userInput = await rl.question(`You: `);
        if (userInput === '/e') break;

        const finalState = await app.invoke({
            message: [{ role: 'user', content: userInput }]
        });

        console.log('You said: ' + JSON.stringify(finalState, null, 2));

    }

    rl.close();

};


main();