import { styled as Styled } from "@mui/material/styles";
import styled from "styled-components";
import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { IMessage } from "../../models/IMessage";

const CardGrid = Styled(Grid)(() => ({
  padding: "0.5em",
}));

export default function MessageItem({ message }: { message: IMessage }) {
  const { sender, sentAt, body } = message;
  return (
    <Box
      sx={{
        bgcolor: "common.black",
        color: "common.white",
        borderRadius: "5px",
      }}
    >
      <CardGrid
        container
        spacing={0}
        direction="column"
        style={{ padding: 0, width: "100%" }}
      >
        <CardGrid xs={12} spacing={2}>
          <Typography component="span" variant="h5">
            {sender}
          </Typography>

          <Typography component="span" color="grey">
            {" "}
            at {sentAt}
          </Typography>
        </CardGrid>

        <CardGrid xs={12}>
          <Typography component="span">{body}</Typography>
        </CardGrid>
      </CardGrid>
    </Box>
  );
}
