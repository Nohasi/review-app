import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function PageNavbar() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '75px' }}>
      <AppBar style={{ background: '#808080' }}>
        <Toolbar>
          <Link to={{pathname: '/itemlist'}}>
            <Button color="inherit" className='Navbar-button'>View All Items</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}