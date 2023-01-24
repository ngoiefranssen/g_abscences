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
  TableRow,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
// import addClass from './Add/addClass'

const Class = () => {

  const [classes, setClasses] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)


  const handleChangePerPage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const emptyRows =  rowsPerPage - Math.min(rowsPerPage, classes.length - page * rowsPerPage)

  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          width : '55%',
          margin : '50px auto 0 auto'
          }}
      >
        <Link to='/addclass_' sx={{  }}>
        <Button>new Class</Button>
        </Link>
      <Table  aria-label="a dense table"  >
        <TableHead size="small">
          <TableRow> {/** sx={{ bgcolor: '#0F0807' }} **/}
            <TableCell>Id</TableCell>
            <TableCell>Name_Categories</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            classes
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((class_, index) => (
              <TableRow>
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
              page = {page}
              rowsPerPageOptions = {[5, 10, 15]}
              rowsPerPage = {rowsPerPage}
              count = {classes.length}
              onPageChange = {handleChangePerPage}
              onRowsPerPageChange = {handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </div>
   
  )
}

export default Class