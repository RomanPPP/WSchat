import EventEmitter from "events";
import WebSocketServer from "./WebSocketServer.mjs";
export default class ChatServer extends WebSocketServer {
  constructor(options) {
    super(options);
    this.on("data", (message) => {
      console.log(message);
      if (!message) return;
      const data = JSON.parse(message);

      if (typeof data.sender !== "string" || typeof data.body !== "string") {
        console.error("Invalid message");
        return;
      }

      const messageToSend = {
        sender: data.sender,
        body: data.body,
        sentAt: Date.now(),
      };

      this.sendMessage(messageToSend);
    });
  }
  sendMessage(message) {
    this.clients.forEach((client) => {
      const frame = this.createFrame(message);
      client.write(frame);
    });
  }
}
