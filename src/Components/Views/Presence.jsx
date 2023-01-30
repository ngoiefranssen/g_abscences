import {
  Button,
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
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
// import addPresence from './Add/addPresence'

const Presence = () => {
  
  const [presences, setPersences] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  // const [open, setOpen] = React.useState(false)

  // const handleClickOpen = () =>{
  //   setOpen(true)
  // }

  const handleChangePerPage = (newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) =>{
    setRowsPerPage(event.target.value, 10)
    setPage(10)
  }
  const emptyRows = 
    rowsPerPage - Math.min(rowsPerPage, presences.length - page * rowsPerPage)
  return (
    <TableContainer component={Paper}
      sx={{
        width: '55%',
        margin: '7% auto 0 auto'
      }}
    >
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name_students</TableCell>
            <TableCell>Jours</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            presences
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((presence, index) =>(
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Link><EditIcon /></Link>
                  <Button><DeleteIcon sx={{ ml: '15px', color:'error' }} /></Button>
                </TableCell>
              </TableRow>
            ))
          }
          {
            emptyRows > 0 && (
              <TableRow style={{ height: 53 * rowsPerPage }}>
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
            count={presences.length}
            rowsPerPageOptions={[5, 10, 15]}
            onPageChange={handleChangePerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default Presence