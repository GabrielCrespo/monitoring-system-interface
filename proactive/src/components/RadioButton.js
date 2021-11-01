import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function getLabelFromArray(arr) {
  return arr.map((object, index) => (
    <FormControlLabel
      key={index}
      value={object.value}
      control={<Radio />}
      label={object.label}
    />
  ));
}

function RadioButton(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.type}</FormLabel>
      <RadioGroup row aria-label={props.label} name={props.name}>
        {getLabelFromArray(props.array)}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
