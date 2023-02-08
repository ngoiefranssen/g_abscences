import { Button, FormControl, FormGroup, styled, TextField } from '@mui/material'
import { postClassData } from '../../../Api/apiAllClass'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FormStyledContainer = styled(FormGroup)`
  width : 50%;
  margin : 7% auto 0 auto;
  & > div {
    margin : 10px;
  }
`
const initialValue = {
  numero : ''
}

const AddClass = () => {
  
  const nagivate = useNavigate()
  const[postClass, setPostClass] = React.useState(initialValue)

  const handleValueChange = (e) => {
    e.preventDefault()
    setPostClass({ ...postClass, [e.target.name] : e.target.value })
  }

  const handleValueOnClick = async () =>{
    await postClassData(postClass)
    nagivate('/class')
  }
  return (
    <FormStyledContainer>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Number"
          name='numero'
          // type='text'
          variant="standard"
          onChange = { (e) => handleValueChange(e) }
        />
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={ () => handleValueOnClick() }>
          Register
        </Button>
      </FormControl>
    </FormStyledContainer>
  )
}

export default AddClass
