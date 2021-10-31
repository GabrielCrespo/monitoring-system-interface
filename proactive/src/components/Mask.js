import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

const theme = createTheme();

function Mask(props) {
  return (
    <ThemeProvider theme={theme}>
      <InputMask
        mask={props.mask}
        disabled={props.disabled}
        placeholder={props.placeholder}
      >
        {(params) => (
          <TextField
            {...params}
            required
            fullWidth
            id={props.id}
            name={props.name}
            label={props.label}
            autoComplete={props.autoComplete}
          />
        )}
      </InputMask>
    </ThemeProvider>
  );
}

export default Mask;
