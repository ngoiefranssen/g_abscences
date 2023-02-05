import { TextField } from '@mui/material'
import React from 'react'

const InputController = (props) => {

  const { name, label, value, onChange, ...other } = props // error=null, 
  return (
    <TextField
      variant='outlined'
      label={label}
      name={name}
      value={value} 
      onChange={onChange}
      // error
      // helperText="Incorrect entry."
      {...other}
    //   { ...(error && { error:true, helperText:error })}
    />
  )
}

export default InputController
