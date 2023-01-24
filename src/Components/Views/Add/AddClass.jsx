import { Button, FormControl, FormGroup, styled, TextField } from '@mui/material'
import React from 'react'

const FormStyledContainer = styled(FormGroup)`
  width : 50%;
  margin : 7% auto 0 auto;
  & > div {
    margin : 10px;
  }
`

const AddClass = () => {
  return (
    <FormStyledContainer>
    <FormControl>
      <TextField
        id="standard-basic"
        label="Name"
        // name='name'
        variant="standard"
        // onChange = { (e) => handleValueChange(e) }
      />
    </FormControl>
    <FormControl>
      <TextField
        id="standard-basic"
        label="Username"
        // name='username'
        variant="standard"
        // onChange = { (e) => handleValueChange(e) }
      />
    </FormControl>
    <FormControl>
      <TextField
        id="standard-basic"
        label="Email"
        // name='email'
        variant="standard"
        // onChange = { (e) => handleValueChange(e) }
      />    
    </FormControl>
    <FormControl>
      <TextField
        id="standard-basic"
        label="Phone"
        // name='phone'
        variant="standard"
        // onChange = { (e) => handleValueChange(e) }
      />
    </FormControl>
    <FormControl>
      <Button
        variant='contained'
        // onClick={ () => handleValueOnClick() }
      >
        Register
      </Button>
    </FormControl>
</FormStyledContainer>
  )
}

export default AddClass
