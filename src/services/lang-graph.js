import { MessagesAnnotation, StateGraph } from '@langchain/langgraph';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { tools } from '../tools/index.js';
import { llm } from '../robot/llm.js';




const toolsNode = new ToolNode(tools);




// Define Nodes --> Functions
const aiModelNode = async (state) => {

    // 2 time call at console means:- 
    // 1st time call from __start__ node
    // 2nd time call from tools node

    // 🔴🔴🔴 For Debugging Purpose...
    console.log('✨ : Running aiModelNode... ... ...');

    // call the LLM here & append AI response
    const aiResponseMessage = await llm.invoke(state.messages);

    // all message concatenated here...
    return { messages: [aiResponseMessage] };
}





const shouldToolCallingNode = async (state) => {

    const lastMessage = state.messages[state.messages.length - 1];

    // 🔴🔴🔴 For Debugging Purpose...
    // console.log(JSON.stringify(state, null, 2));

    return lastMessage?.tool_calls?.length > 0 ? 'tools' : '__end__';
}




// Define Edges --> Build the graph
const workflow = new StateGraph(MessagesAnnotation)
    .addNode('agent', aiModelNode)
    .addNode('tools', toolsNode) // by this tool node, ai-agent have internet access
    .addEdge('__start__', 'agent')
    .addEdge('tools', 'agent')
    .addConditionalEdges('agent', shouldToolCallingNode);




// Define Graph --> compile & invoke the graph
export const langGraphApp = workflow.compile();