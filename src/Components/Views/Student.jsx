import {
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

const Student = () => {

  const [students, setStudents] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  
  const handleChangePerPage = (event, newPage) =>{
    setPage(newPage);
  }
  const handleChangeRowsPerPage = (event) =>{
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, students.length - page * rowsPerPage) 

  return (
    <TableContainer component={Paper}
      sx={{
        width: '80%',
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
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((student, index) =>(
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Link><EditIcon /></Link>
                  <Link><DeleteIcon sx={{ ml: '15px', color:'red' }} /></Link>
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
  )
}

export default Student