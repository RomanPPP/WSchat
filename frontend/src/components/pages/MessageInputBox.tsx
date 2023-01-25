import React from "react";
import { Box, Button, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes";

export default function MessageInputBox({
  sendMessage,
  setMessageBody,
  disabled,
  messageBody,
  username
}: {
  sendMessage: React.MouseEventHandler<HTMLButtonElement>;
  setMessageBody: Function;
  disabled: boolean;
  messageBody: string;
  username : string
}) {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="span" variant="h5">
        Signed as {username}
      </Typography>
      <Grid
        container
        alignItems="flex-end"
        sx={{
          marginBottom: "5vh",
        }}
      >
        <Grid xs={6}>
          <TextField
            id="message"
            type="text"
            multiline
            maxRows={2}
            placeholder="Type your message here..."
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            required
            sx={{
              bgcolor: "common.white",
              borderRadius: "5px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid sx={{ height: "100%" }}>
          <Button
            sx={{ color: "common.white" }}
            aria-label="Send"
            onClick={sendMessage}
            disabled={disabled}
          >
            send
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
