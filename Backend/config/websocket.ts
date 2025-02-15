module.exports = ({ strapi }) => {
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ port: 8080 });
  
    wss.on('connection', function connection(ws) {
      console.log('Client connected');
  
      ws.on('message', function incoming(message) {
        console.log(`Received: ${message}`);
        ws.send(message.toString()); // Echo the message back
      });
  
      ws.on('close', () => {
        console.log('Client disconnected');
      });
    });
  
    console.log('WebSocket server running on ws://localhost:8080');
  };
  