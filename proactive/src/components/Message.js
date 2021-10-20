import { Container, CssBaseline, Typography } from "@mui/material";
import React from "react";

import useStyles from "../styles";

const Message = () => {
  const classes = useStyles();
  return (
    <main>
      <CssBaseline />
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Seja bem-vindo!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Para começar, escolha a opção abaixo na qual você melhor se encaixa:
          </Typography>
        </Container>
      </div>
    </main>
  );
};

export default Message;
