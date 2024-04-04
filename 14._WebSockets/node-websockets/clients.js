import WebSocket from "ws";

const websocketClient = new WebSocket('ws://localhost:8080');

websocketClient.on('open', () => {
    websocketClient.send('This is a messsage from the client from Node.js');

    websocketClient.on('message', (message) =>{
        console.log(`Recieved message: ${message}`);
        websocketClient.close();
    });
});
