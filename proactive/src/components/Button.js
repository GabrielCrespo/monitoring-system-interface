import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import useStyles from "../styles";

const buttons = [
  <Button key="aluno">Aluno</Button>,
  <Button key="professor">Professor</Button>,
  <Button key="monitor">Monitor</Button>,
  <Button key="tutor">Tutor</Button>,
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
      <ButtonGroup
        className={classes.buttonGroup}
        orientation="vertical"
        aria-label="vertical outlined button group"
        variant="contained"
        size="large"  
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default Buttons;
