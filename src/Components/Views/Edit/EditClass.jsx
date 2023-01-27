import { TextField, FormGroup, FormControl, Button, styled } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editClass, getFecthData } from '../../../Api/apiAllClass'

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

const EditClass = () => {

  const[postClass, setPostClass] = React.useState(initialValue)
  const nagivate = useNavigate()
  const { id } = useParams()

  const handleValueChange = (e) => {
    e.preventDefault()
    setPostClass({ ...postClass, [e.target.name] : e.target.value})
  }

  React.useEffect((id) =>{
     const handleGetData = async () => {
        var res = await getFecthData(id)
        setPostClass(res.data)
    }
    handleGetData()
  },[])

  const handleValueOnClick = async () =>{
    await editClass(postClass, id)
    nagivate('/class')
  }
  return (
    <FormStyledContainer>
    <FormControl>
      <TextField
        id="standard-basic"
        label="Number"
        name='numero'
        type='number'
        variant="standard"
        value={postClass.numero}
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

export default EditClass