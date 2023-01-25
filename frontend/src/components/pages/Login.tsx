import * as React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

import { useNavigate } from "react-router";
import Layout from "./Layout";
import { Container } from "@mui/system";
export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");

  function handleSubmit() {
    if (username) {
      navigate(`/chat/${username}`);
    }
  }

  return (
    <Layout>
      <Container>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              id="username"
              type="text"
              placeholder="Your name or nickname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Box>
          <Button type="button" onClick={handleSubmit}>
            Log in the chat
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
