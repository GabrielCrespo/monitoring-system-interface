import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function mapOptionsToSelect(arr) {
  return arr.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
}

export default function SelectTextFields(props) {
  const [course, setcourse] = useState(null);

  const handleChange = (event) => {
    setcourse(event.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          id={props.id}
          name={props.name}
          select
          label={props.label}
          value={course}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          required
        >
          {mapOptionsToSelect(props.array)}
        </TextField>
      </div>
    </Box>
  );
}
