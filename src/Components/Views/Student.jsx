import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { getAll } from '../../Api/apiAllStudent'
import MuiFormAddOrEditStudent from '../Views/Add/MuiFormAddOrEditStudent'



const Student = () => {

  const [students, setStudents] = React.useState([]);
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  React.useEffect(() =>{
    let subscriber = true
    if(subscriber)
      handleFetchAllDatas()
      return() => subscriber = false
  }, [])
  
  const handleFetchAllDatas = async () =>{
    const res = await getAll()
    // console.log(res?.data?.data)
    setStudents(res?.data?.data)
  }
  const handleChangePerPage = (event, newPage) =>{
    setPage(newPage);
  }
  const handleChangeRowsPerPage = (event) =>{
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, students.length - page * rowsPerPage) 

  return (
    <Grid sx={{ margin : '50px auto 0 auto' }}>
    <Grid position='revert-layer' width="10%" marginLeft={150}>
    <MuiFormAddOrEditStudent />
    </Grid>
      <TableContainer component={Paper}
        sx={{
          width: '85%',
          margin : '50px auto 0 auto'
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name_student</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>DateNaissance</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Number_classes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              students
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((student, index) =>(
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.nom}</TableCell>
                  <TableCell>{student.prenom}</TableCell>
                  <TableCell>{student.dateNaissance}</TableCell>
                  <TableCell>{student.date}</TableCell>
                  <TableCell>{student.eleves.nomClasse}</TableCell>
                  <TableCell>
                    <Button component={Link}><EditIcon /></Button>
                    <Button><DeleteIcon sx={{ ml: '15px', color:'red' }} /></Button>
                  </TableCell>
                </TableRow>
              ))
            }
            {
              emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )
            }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                component='div'
                page={page}
                rowsPerPage={rowsPerPage}
                count={students.length}
                rowsPerPageOptions={[5, 10, 20]}
                onPageChange={handleChangePerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
    
  )
}

export default Student