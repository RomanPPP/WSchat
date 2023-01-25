import * as React from "react";

import { Typography, Box, Container } from "@mui/material";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Box
        sx={{
          position: "absolute",
          top: "5px",
          width: "100%",
          height: "10vh",
          left: "0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ alignText: "center" }}>
          React WebSocket Chat
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "10vh",
          left: 0,
          height: "90vh",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
