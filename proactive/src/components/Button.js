import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import useStyles from "../styles";
import { BrowserRouter as Router } from "react-router-dom";

const buttons = [
  <Button key="aluno" href="/login-student">
    Aluno
  </Button>,
  <Button key="professor" href="/login-teacher">
    Professor
  </Button>,
  <Button key="monitor" href="/login-monitor">
    Monitor
  </Button>,
  <Button key="tutor" href="/login-tutor">
    Tutor
  </Button>,
];

function Buttons() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.box}
    >
      <Router>
        <ButtonGroup
          className={classes.buttonGroup}
          orientation="vertical"
          aria-label="vertical outlined button group"
          variant="contained"
          size="large"
        >
          {buttons}
        </ButtonGroup>
      </Router>
    </Box>
  );
}

export default Buttons;
