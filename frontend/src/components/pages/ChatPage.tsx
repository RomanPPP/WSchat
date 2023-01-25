import React, { useRef, useState, useEffect } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./Layout";
import MessageItem from "./MessageItem";
import MessageInputBox from "./MessageInputBox";
import { useParams } from "react-router-dom";
import { IMessage } from "../../models/IMessage";
import theme from "../themes";

export default function ChatPage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isConnectionOpen, setConnectionOpen] = useState(false);
  const [messageBody, setMessageBody] = useState<string>("");

  const { username } = useParams();

  const ws = useRef<WebSocket>();

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

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:4000");

    ws.current.onopen = () => {
      console.log("Connection opened");
      setConnectionOpen(true);
    };

    ws.current.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      setMessages((_messages) => [..._messages, data]);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, []);

  const scrollTarget = useRef(null);

  useEffect(() => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Grid
          container
          direction="column"
          sx={{
            height: "100%",
          }}
        >
          <Grid
            xs={12}
            sx={{
              height: "80%",
              overflow: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Container>
              <Grid container spacing={6}>
                {messages.map((message, index) => (
                  <Grid
                    xs={8}
                    key={index}
                    xsOffset={message.sender === username ? 0 : 3}
                  >
                    <MessageItem message={message}></MessageItem>
                  </Grid>
                ))}

                <div ref={scrollTarget} />
              </Grid>
            </Container>
          </Grid>
          <Grid
            xs={12}
            sx={{
              height: "20%",
              bgcolor: "common.black",
              color: "primary.contrastText",
            }}
          >
            <Container
              sx={{
                padding: "5px",
              }}
            >
              <MessageInputBox
                username={username}
                sendMessage={sendMessage}
                setMessageBody={setMessageBody}
                disabled={!isConnectionOpen}
                messageBody={messageBody}
              ></MessageInputBox>
            </Container>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}
