import { TextField, FormGroup, FormControl, Button, styled } from '@mui/material'
import React from 'react'
import { useNavigate, useParams,useLocation} from 'react-router-dom'
import { apiEditClass, getFecthData } from '../../../Api/apiAllClass'

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
 
  const location = useLocation()
  location?.state && console.log("state", location?.state);
  
  const[eclass, setEditClass] = React.useState(initialValue)
  const nagivate = useNavigate()
  const { id } = useParams()

  const handleValueChange = (e) => {
    e.preventDefault()
    setEditClass({ ...eclass, [e.target.name] : e.target.value })
  }
  
  React.useEffect(() => {
    let subscriber = true
    if(subscriber)
      handleGetData()
    return () => subscriber = false
  },[])

  const handleGetData = async () => {
    let res = await getFecthData()
    setEditClass(res?.data?.Data)
  }

  const handleValueOnClick = async () => {
    debugger
    await apiEditClass(eclass, id)
    nagivate('/class')
  }
  return (
    <FormStyledContainer>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Number"
          name='numero'
          type='text'
          variant="standard"
          value={eclass.numero}
          onChange = { (e) => handleValueChange(e) }
        />
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={ () => handleValueOnClick() }
        >
          Register
      </Button>
    </FormControl>
    </FormStyledContainer>
  )
}

export default EditClass