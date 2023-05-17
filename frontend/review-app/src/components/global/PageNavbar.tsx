import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../../App.css';

export default function PageNavbar() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '75px' }}>
      <AppBar style={{ background: '#808080' }}>
        <Toolbar>
          <Button color="inherit" className='Navbar-button' href="itemlist">View All Items</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}