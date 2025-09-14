import { langGraphApp } from './services/lang-graph.js';
import readLine from 'node:readline/promises';


const main = async () => {

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    while (true) {
        const userInput = await rl.question('🟢 : ');
        if (userInput === '/e') break;


        const finalState = await langGraphApp.invoke({
            messages: [{ role: 'user', content: userInput }]
        });


        // console.log('You said: ' + JSON.stringify(finalState, null, 2));


        const lastMessage = finalState.messages[finalState.messages.length - 1];


        console.log('🤖 : ' + lastMessage.content);

    }

    rl.close();

};


main();