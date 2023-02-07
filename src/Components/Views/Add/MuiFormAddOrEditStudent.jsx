import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { Form } from '../../../controls/UseForm'
import Controllers from '../../../controls/Controllers'
import { Stack } from '@mui/material';
import { getAll } from '../../../Api/apiAllStudent';

const MuiFormAddOrEditStudent = ({
  student,
  open,
  // setOpen,
  handleClose,
  handleClickOpen,
  handleSumbitElementAddOrEdit,
  handleInputChange,
  handleInputChangeSelect
}) => {

  const [classes, setClasses] = React.useState()

  React.useEffect(()=>{
    getAll().then(res=>setClasses(res?.data?.data))
            .catch(err=>console.log("Error here:",err.message))
  },[])

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Newstudent
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Form onSumit={handleSumbitElementAddOrEdit}>
          <Stack align="center">
            <TextField
              margin="dense"
              name='name'
              id="name"
              label="Name student"
              type="text"
              value={student.name}
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name='lastname'
              id="lastname"
              label="Last name student"
              type="text"
              fullWidth
              value={student.lastname}
              variant="outlined"
              onChange={handleInputChange}
            />
          <Controllers.MuiDatePickers
            name="dn"
            label="Hire Date"
            value={student.dn}
            onChange={handleInputChange}
            variant="outlined"
          />
          <Controllers.Select
            name="classe"
            label="Name classes"
            value={student.classe.id}
            onChange={handleInputChangeSelect}
            options={classes}
          />
          </Stack>
          <DialogActions>
            <Controllers.Button type="submit" text="Save"/>
            <Controllers.Button onClick={handleClose} text="Cancel" />
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
}

export default MuiFormAddOrEditStudent