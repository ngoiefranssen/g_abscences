import { AppBar, Grid, styled, Toolbar } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = styled(NavLink)`
  font-size : 20px;
  margin-right : 20px;
  color : inherit;
  text-decoration : currentColor;
  text-transform: uppercase;
`
const Header = () => {
  return (
      <AppBar sx={{ background: '#063970', position:'static' }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Nav to='/absence'>Absence</Nav>
            <Nav to='/class'>Class</Nav>
            <Nav to='/student'>Student</Nav>
            <Nav to='/justification'>Justification</Nav>
            <Nav to='/presence'>Presence</Nav>
          </Grid>
        </Toolbar> 
      </AppBar>
  )
}

export default Header