import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButton() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gênero</FormLabel>
      <RadioGroup row aria-label="gender" name="gender">
        <FormControlLabel value="female" control={<Radio />} label="Feminino" />
        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
        <FormControlLabel value="other" control={<Radio />} label="Outro" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
