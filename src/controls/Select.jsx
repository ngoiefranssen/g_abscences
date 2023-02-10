import { 
  FormControl,
//   FormHelperText, 
  InputLabel,
  MenuItem,
  Radio,
  Select as MuiSelect
} from '@mui/material';
import React from 'react'

const Select = (props) => {
    const { name, label, value, onChange, options } = props; // error=null,
    return (
        <FormControl variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <MuiSelect label={label} name={name} value={value} onChange={onChange}>
                <MenuItem value=''>None</MenuItem>
                {
                    options?.map(
                        (item) => (
                        <MenuItem
                            key={item?.id}
                            value={item?.id}
                            control={<Radio />}
                            label={item?.numero}
                        >
                            {item?.numero}
                        </MenuItem>
                    ))
                }
            </MuiSelect>
            {/* {error && <FormHelperText>{error}</FormHelperText>} */}
        </FormControl>
    );
}

export default Select
