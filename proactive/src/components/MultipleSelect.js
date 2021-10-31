import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const courses = [
  {
    value: "",
    label: "",
  },
  {
    value: "CIC",
    label: "Ciência da Computação",
  },
  {
    value: "LIC",
    label: "Computação",
  },
  {
    value: "EC",
    label: "Engenharia de Computação",
  },
  {
    value: "EM",
    label: "Engenharia Mecatrônica",
  },
  {
    value: "OT",
    label: "Outro",
  },
];

export default function SelectTextFields() {
  const [course, setcourse] = React.useState("");

  const handleChange = (event) => {
    setcourse(event.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-course-native"
          select
          label="Curso"
          value={course}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          required
          autoComplete="family-name"
        >
          {courses.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
