import React, { useRef, useState, useEffect } from "react";

import Layout from "./Layout";

import { useParams } from "react-router-dom";
import { IMessage } from '../../models/IMessage'
export default function ChatPage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isConnectionOpen, setConnectionOpen] = useState(false);
  const [messageBody, setMessageBody] = useState<string>("");

  const { username } = useParams();

  const ws = React.useRef<WebSocket>();


  const sendMessage = () => {
    if (messageBody) {
      ws.current.send(
        JSON.stringify({
          sender: username,
          body: messageBody,
        })
      );
      setMessageBody("");
    }
  };

  React.useEffect(() => {
    ws.current = new WebSocket("ws://localhost:4000");


    ws.current.onopen = () => {
      console.log("Connection opened");
      setConnectionOpen(true);
    };


    ws.current.onmessage = (event : MessageEvent) => {
      const data = JSON.parse(event.data);
      setMessages((_messages) => [..._messages, data]);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, []);

  const scrollTarget = useRef(null);

  React.useEffect(() => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  return (
    <Layout>
      <div id="chat-view-container" className="flex flex-col w-1/3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-3 rounded py-3 w-1/3 text-white ${
              message.sender === username
                ? "self-end bg-purple-600"
                : "bg-blue-600"
            }`}
          >
            <div className="flex items-center">
              <div className="ml-2">
                <div className="flex flex-row">
                  <div className="text-sm font-medium leading-5 text-gray-900">
                    {message.sender} at
                  </div>
                  <div className="ml-1">
                    <div className="text-sm font-bold leading-5 text-gray-900">
                      {new Date(message.sentAt).toLocaleTimeString(undefined, {
                        timeStyle: "short",
                      })}{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-sm font-semibold leading-5">
                  {message.body}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollTarget} />
      </div>
      <footer className="w-1/3">
        <p>
          You are chatting as <span className="font-bold">{username}</span>
        </p>

        <div className="flex flex-row">
          <input
            id="message"
            type="text"
            className="w-full border-2 border-gray-200 focus:outline-none rounded-md p-2 hover:border-purple-400"
            placeholder="Type your message here..."
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            required
          />
          <button
            aria-label="Send"
            onClick={sendMessage}
            className="m-3"
            disabled={!isConnectionOpen}
          >
            send
          </button>
        </div>
      </footer>
    </Layout>
  );
}
