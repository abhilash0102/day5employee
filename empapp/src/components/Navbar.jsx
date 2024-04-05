import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar color='error'>
            <Toolbar>
                <Typography variant='h5' color={'black'} >employee app</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to={'/'} style={{textDecoration:"none", color:"white"}}>view data</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'><Link to={'/add'} style={{textDecoration:"none", color:"white"}}>add data</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar