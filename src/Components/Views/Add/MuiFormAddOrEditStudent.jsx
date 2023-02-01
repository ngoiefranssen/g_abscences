import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { UseForm, Form } from '../../../controls/UseForm'
import Controllers from '../../../controls/Controllers'
import { Grid } from '@mui/material';

const initialValues = {
  name: "",
  lastname: "",
  dn: "",
  classe: {
    id: ""
  }
}

const MuiFormAddOrEditStudent = () => {

  const [students, setStudents] = React.useState(initialValues)
  const [open, setOpen] = React.useState(false);
  const [classes, setClasses] = React.useState('')
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleChange = (e) =>{
  //   setClasses(e.target.value)
  // }
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    values,
    setValues,
    // errors,
    // setErrors,
    handleInputChange,
    // resetForm
  } = UseForm(initialValues)

  const addOrEdit = (student) => {
    if(student.id == 0)
    {
      //
    }else{
      //
    }
    // resetForm()
  }

  const handleOnSubmitAddOrEdit = (e) => {
    e.preventDefault()
    // if(){}
  }

  return (
    <di>
      <Button variant="outlined" onClick={handleClickOpen}>
          Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Form onSumit={handleOnSubmitAddOrEdit}>
          <TextField
            autoFocus
                  margin="dense"
                  name='name'
                  id="name"
                  label="Name student"
                  // type="name"
                  value={values.name}
                  fullWidth
                  variant="outlined"
          />
          <TextField
            autoFocus
                  margin="dense"
                  name='lastname'
                  id="lastname"
                  label="Last name student"
                  // type="name"
                  fullWidth
                  value={values.lastname}
                  variant="outlined"
          />
          <Controllers.MuiDatePickers
            name="dn"
            label="Hire Date"
            value={values.dn}
            onChange={handleInputChange}
            variant="outlined"
          />
          <Controllers.Select
          
            name="classeID"
            label="Name classes"
            value={values.classe.id}
            onChange={handleInputChange}
            // options={nomClasse}
          />
          <DialogActions>
            <Controllers.Button type="submit" text="Save"/>
            <Controllers.Button onClick={handleClose} text="Cancel" />
          </DialogActions>
        </Form>
      </Dialog>
    </di>
  );
}

export default MuiFormAddOrEditStudent