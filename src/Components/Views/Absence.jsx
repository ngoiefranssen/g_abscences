import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import React from 'react'

const Absence = () => {

  const [absences, setAbsences] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePerPage = (newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, absences.length - page * rowsPerPage)
  return (
    <TableContainer component={Paper}
      sx={{
        width: '50%',
        margin: '7% auto auto'
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name_students</TableCell>
            <TableCell>Jours</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            absences
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((absence, index) => (
               <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
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
          <TablePagination
            component='div'
            page={page}
            rowsPerPage={rowsPerPage}
            count={absences.length}
            onPageChange={handleChangePerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default Absence