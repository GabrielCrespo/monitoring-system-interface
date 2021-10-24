import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import useStyles from "../styles";
import { BrowserRouter as Router } from "react-router-dom";

const buttons = [
  <Button key="aluno" href="/signup-student">
    Aluno
  </Button>,
  <Button key="professor" href="/signup-teacher">
    Professor
  </Button>,
  <Button key="monitor" href="/signup-monitor">
    Monitor
  </Button>,
  <Button key="tutor" href="/signup-tutor">
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
