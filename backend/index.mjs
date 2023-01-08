import WebSocketServer from "./src/WebSocketServer.mjs";
const PORT = 4000.
const server = new WebSocketServer({ port: PORT });

server.on('data', (message, reply) => {
  console.log(message)
  if(!message) {
    reply('No data recieved!')
    return
  }
  const data = JSON.parse(message);
  reply(`Recieved data : ${data}`)
});

server.listen(() => {
  console.log(`WebSocket server listening on port ${PORT}`);
});