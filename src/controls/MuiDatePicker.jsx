import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const MuiDatePickers = (props) => {

  const { name, label, value, onChange } = props
  const convertToDefEventParam = (name, value) => ({
    target: {
      name, value
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          label= {label}
          name={name}
          value={value}
          onChange={(date) => onChange(convertToDefEventParam(name, date))}
          renderInput={(params) => <TextField {...params} helperText="Clear Initial State"/>}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default MuiDatePickers