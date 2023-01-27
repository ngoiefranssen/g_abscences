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
import { getFecthData, delClass } from '../../Api/apiAllClass'


const Class = () => {

  const [classes, setClasses] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  React.useEffect(() =>{
    let subscriber=true
    if(subscriber)
      handleDataGet();
      return()=>subscriber=false
  }, []);

  const handleDataGet = async () => {
    const res = await getFecthData();
    setClasses(res?.data?.Data)
    // console.log(res.data?.Data)
  }

  const handleChangePerPage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, classes.length - page * rowsPerPage)
  
  const deleteClass = async (id) => {
    await delClass(id)
    handleDataGet();
  }

  return (
      <TableContainer
        component={Paper}
        sx={{
          width : '55%',
          margin : '50px auto 0 auto'
        }}>
        <Link to='/addclass'>
          <Button>new Class</Button>
        </Link>
      <Table aria-label="a dense table" size="small">
        <TableHead>
          <TableRow> {/** sx={{ bgcolor: '#0F0807' }} **/}
            <TableCell>Id</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            classes
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((c)=>(
              <TableRow key={c.id}>
                <TableCell>{c.id}</TableCell>
                <TableCell>{c.numero}</TableCell>
                <TableCell>
                  <Link to={`/editclass/${c.id}`}><EditIcon/></Link>
                  <Button onClick={() => deleteClass()}>
                    <DeleteIcon sx={{ ml: '15px', color:'error' }}/>
                  </Button>
                </TableCell>
              </TableRow>
            )) 
          }
          {
            emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6}/>
              </TableRow>
            )
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              component='div'
              page = {page}
              rowsPerPageOptions = {[5, 10, 25]}
              rowsPerPage = {rowsPerPage}
              count = {classes.length}
              onPageChange = {handleChangePerPage}
              onRowsPerPageChange = {handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default Class