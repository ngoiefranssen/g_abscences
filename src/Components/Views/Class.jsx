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
import { Link, /* useNavigate */ } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { getFecthData, delClass } from '../../Api/apiAllClass'

const Class = () => {
  // const history=()
  const [classes, setClasses] = React.useState([])
  // const navigate = useNavigate()
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
  // console.log("OBJET", classes)
  // const editRow = (e) => {
  //   if(e){
  //     console.log("object selectionne", e);
  //     // handleEdit(false)
  //   }

  //   // e.preventDefault()
  //   // setEditClass({ ...eclass, [e.target.name] : e.target.value })
  //   debugger
  // }
// const handleSendOjectToparam=(objToSend)=>{
//   console.log("object here:",objToSend)
//   // history.push({pathname:`/editclass/${objToSend?.id}`,state:{...objToSend} })
//   // navigate(`/editclass/${objToSend?.id}`,objToSend)
//   navigate('/justification')
// } 

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
            ?.map((cl) => (
              <TableRow key={cl.id}>
                <TableCell>{cl?.id? cl?.id : ""}</TableCell>
                <TableCell>{cl?.numero ? cl.numero : ""}</TableCell>
                <TableCell>
                {/* <Button onClick={()=>navigate(`/editclass/${cl.id}`, {state : {...cl}})}> */}
                  {/* <Button onClick={ () => navigate(`/addclass`, {state: { ...cl}}) }> */}
                  {/* <Button onClick={()=>navigate('/justification')} component={Link}> */}
                  {/* <Button onClick={ () => editRow(cl) }> */}
                  <Button to={`/editclass/${cl.id}`} component={Link}>
                    <EditIcon/>
                  </Button>
                  <Button onClick={() => deleteClass(cl.id)} color='error'>
                    <DeleteIcon/>
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