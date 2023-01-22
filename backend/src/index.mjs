import WebSocketServer from "./modules/WebSocketServer.mjs";
import ChatServer from "./modules/ChatServer.mjs";
const PORT = 4000.
const server = new ChatServer({ port: PORT });


server.listen((message) => {
  console.log(`WebSocket server listening on port ${PORT}`);
});