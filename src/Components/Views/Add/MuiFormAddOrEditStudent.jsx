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
import { Grid, Stack } from '@mui/material';
import { getFecthData } from '../../../Api/apiAllClass';

const MuiFormAddOrEditStudent = ({
  student,
  open,
  // setOpen,
  handleClose,
  handleClickOpen,
  handleSumbitElementAddOrEdit,
  handleInputChange,
  handleInputChangeSelect,
  handleChangeDate
}) => {

  const [classes, setClasses] = React.useState()

  React.useEffect(()=>{
    getFecthData()
      .then((res)=>{setClasses(res?.data?.Data)})
      .catch((err)=>{console.log("Error here:",err.message)})
  },[])

  // const dn = () => {
  //   var formatDateInitial = {year: "numeric", month: "numeric", day: "numeric" }
  //   return new Date().toDateString([], formatDate)
  // }

  return (
    
    <Grid sx={{ ml: "56px"}}>
        <Button variant="contained" onClick={handleClickOpen}>
          Ajouter
        </Button>
      <Dialog open={open} onClose={handleClose} /* fullWidth="md" */>
        <Form onSubmit={handleSumbitElementAddOrEdit}>
          <Stack align="center">
            <TextField
              margin="dense"
              name='name'
              id="name"
              label="Name student"
              type="text"
              value={student?.name}
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
              value={student?.lastname}
              variant="outlined"
              onChange={handleInputChange}
            />
          <Controllers.MuiDatePickers
            name="dn"
            label="Date de naissance"
            value={student?.dn}
            onChange={handleChangeDate}
            type="date"
            fullWidth
            variant="outlined"
          />
          <Controllers.Select
            name="classe"
            label="Name classes"
            type="text"
            value={student?.classe?.id}
            fullWidth
            onChange={handleInputChangeSelect}
            options={classes}
          />
          </Stack>
          <DialogActions>
            <Controllers.Button type='submit' text="Save"/>
            <Controllers.Button onClick={handleClose} text="Cancel" />
          </DialogActions>
        </Form>
      </Dialog>
    </Grid>
  );
}

export default MuiFormAddOrEditStudent