import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { pt } from "date-fns/locale";
import { Stack } from "@mui/material";
import { DesktopDatePicker } from "@mui/lab";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={pt}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Data Nascimento"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} required />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
