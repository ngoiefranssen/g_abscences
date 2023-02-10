import {
  Button,
  Grid,
  Paper,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  deleteStudentData,
  getAll,
  getAllByClass,
  postDataStudent,
  updateDataStudent
} from '../../Api/apiAllStudent'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import MuiFormAddOrEditStudent from '../Views/Add/MuiFormAddOrEditStudent'
import { useParams } from 'react-router-dom'
import SelectedClasse from '../../selectedClasses/SelectedClasse'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const Student = () => {

  const [open, setOpen] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState("");
  const [students, setStudents] = React.useState([]);
  const [student, setStudent] = React.useState({
    name: "",
    lastname: "",
    // dn: "",
    dn: "",
    classe: {
      id: ""
    }
  })
  const {id} = useParams()
  // const navigate = useNavigate()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  // const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    let subscriber = true
    if(subscriber)
      handleFetchAllDatas()
    return() => subscriber = false
  }, [])
  
  const handleFetchAllDatas = async () => {
    const res = await getAll()
    // console.log(res?.data?.data)
    setStudents(res?.data?.data)
  }

  const handleChangePerPage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) =>{
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setStudent({
      ...student,
      [name] : value
    })
  }

  const handleChangeDate = (e) => {
    let d = e.target.value.$d
    setStudent({
      ...student,
    dn : d
    })
  }

  const handleInputChangeSelect = (e) => {
    const { name, value } = e.target
    setStudent({
      ...student,
      [name] : {id:value}
    })
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handlePostStudent = async () => {
    await postDataStudent(student)
    .then((response) => {
      console.log("CA PASSE", response)
    }).catch((error) => {
      console.log("ECHEC",error)
    })
    console.log("Eleve enregistre",student)
    // navigate('/student')
  }
  // Edit student
  const handleEditToRow = async () => {
    await updateDataStudent(student, id)
  }

  // EditOrAdd (=>)
  const handleSumbitElementAddOrEdit = (e) => {
    e.preventDefault()
    if(student?.id){ // id exist
      handleEditToRow()
    }else{
      handlePostStudent()
    }
  }
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage) 

  const deleteStudent = async (id) => {
    await deleteStudentData(id)
    handleFetchAllDatas()
  }
  const handleOnChangeClass=(e)=>{
    getAllByClass(e.target.value)
      .then(res=>setStudents(res?.data?.data))
      .catch(err=>console.error("error here:",err.message))
  }
  return (
    <div style={{ width: "90%", margin: "50px auto 0 auto" }}>
      <Grid position='revert-layer' height="0.5px">
      <SelectedClasse
          student={student}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          handleOnChangeClass={handleOnChangeClass}
        />
      {/* <select value={selectedCLass} onChange={handleOnChangeClass}>
        <option value=""></option>
        <option value="14">1er co</option>
        <option value="15">2er co</option>

      </select> */}
      </Grid>
    <Grid position='revert-layer' height={30} margin="25px" marginLeft={134}>
   
      {/* <form>
        <TextField variant="contained" onChange={ (e) => setSearch(e.target.value) } />
      </form> */}
        <MuiFormAddOrEditStudent
          student={student}
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          handleSumbitElementAddOrEdit={handleSumbitElementAddOrEdit}
          handleInputChange={handleInputChange}
          handleInputChangeSelect={handleInputChangeSelect}
          handleChangeDate={handleChangeDate}
        />
    </Grid>
      <TableContainer component={Paper}>
        <Table size="small" sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Name_student</StyledTableCell>
              <StyledTableCell>Lastname</StyledTableCell>
              <StyledTableCell>DateNaissance</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Number_classes</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              students
              // ?.filter((item) => {
              //   return search.toLowerCase() === ''
              //     ? item
              //     : item.nom.toLowerCase().includes(search);
              // })
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((st, index) =>(
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" key={index?.id}>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell>{st.nom}</StyledTableCell>
                  <StyledTableCell>{st.prenom}</StyledTableCell>
                  <StyledTableCell>{st.dateNaissance}</StyledTableCell>
                  <StyledTableCell>{st.date}</StyledTableCell>
                  <StyledTableCell>{st.eleves.nomClasse}</StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={() => {
                      handleEditToRow(st)
                      handleClickOpen()
                      }}><EditIcon /></Button>
                    <Button onClick={ () => deleteStudent(st.id) }>
                      <DeleteIcon sx={{ ml: '15px', color:'red' }} />
                      </Button>
                  </StyledTableCell>
                </StyledTableRow>
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
    </div>
    
  )
}

export default Student