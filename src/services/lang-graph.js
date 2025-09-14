import { MessagesAnnotation, StateGraph } from '@langchain/langgraph';
import { llm } from '../robot/llm.js';


// Define Nodes --> functions
const callModelNode = async (state) => {

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
export const langGraphApp = workflow.compile();